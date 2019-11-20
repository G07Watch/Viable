const fetch = require('node-fetch');
const {secretOrKey} = require('../config/keys');

const stateIndex = {};

const fetchStatePop = async() => {

  let response = await fetch(
    `https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=state:*&key=${secretOrKey}`,{
    method: "GET"
  })
  .then(res => res.json())
  .then(json => json)

  console.log(response);
  return response;
}

fetchStatePop();

const StateEncoder = async() =>{

  await fetchStatePop()
  .then( states  => {
    // console.log(states);
    states.shift();
    states.map(state =>{
      let stateName = state[0];
      let stateCode = state[2];
      stateIndex[stateName] = stateCode
    });

  // console.log(stateIndex);
  return stateIndex;
  })
  .catch(err => console.log(err))
  
}

// StateEncoder();

const fetchIncomeBracket = async(bracketCode, stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/acs/acs1/subject?get=NAME,${bracketCode}&for=state:${stateCode}&key=${secretOrKey}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(json => json)
    
  console.log(response);
  return response;
}

const income = fetchIncomeBracket("S0501_C03_080E", "01")

module.exports = {income}
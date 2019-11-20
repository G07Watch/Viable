const fetch = require('node-fetch');
const stateIndex = {};

const fetchStatePop = async() => {

  let response = await fetch(
    "https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=state:*&key=2fe43e6309e00333d4f7f2c984bf7ac1c895276d",{
    method: "GET"
  })
  .then(res => res.json())
  .then(json => json)

  return response;
}

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
    `https://api.census.gov/data/2018/acs/acs1/subject?get=NAME,${bracketCode}&for=state:${stateCode}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(json => json)
    
  console.log(response);
  return response;
}

const income = fetchIncomeBracket("S0501_C03_080E", "01")

module.exports = {income}
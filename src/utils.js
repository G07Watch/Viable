const fetch = require('node-fetch');
const {secretOrKey} = require('../config/keys');

// const stateIndex = {};

// const fetchAllState = async() => {

//   let response = await fetch(
//     `https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=state:*&key=${secretOrKey}`,{
//     method: "GET"
//   })
//   .then(res => res.json())
//   .then(json => json)

//   console.log(response);
//   return response;
// }

// const StateEncoder = async() =>{

//   await fetchAllState()
//   .then( states  => {
//     // console.log(states);
//     states.shift();
//     states.map(state =>{
//       let stateName = state[0];
//       let stateCode = state[2];
//       stateIndex[stateName] = stateCode
//     });

//   // console.log(stateIndex);
//   return stateIndex;
//   })
//   .catch(err => console.log(err))

// }

// StateEncoder();



const fetchStatePop = async (stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=state:${stateCode}&key=${secretOrKey}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => json)

  console.log(response);
  return response;
}

fetchStatePop("06");

const fetchIncomeBracket = async(bracketCode, stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/acs/acs1/subject?get=NAME,${bracketCode}&for=state:${stateCode}&key=${secretOrKey}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(json => json)
    
  // console.log(response);
  return response;
}

const fetchLuxuryPercent = async(stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/acs/acs1/profile?get=NAME,DP04_0088PE&for=state:${stateCode}&key=${secretOrKey}`, {
      method: "GET"
  })
    .then(res => res.json())
    .catch(err=> err)
    .then(json => json)

  console.log(response);
  return response;
}

// fetchIncomeBracket();
// fetchLuxuryPercent("06")

module.exports = { fetchIncomeBracket, fetchStatePop, fetchLuxuryPercent }
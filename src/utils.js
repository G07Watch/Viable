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
//   return response;
// }

// const StateEncoder = async() =>{

//   await fetchAllState()
//   .then( states  => {
//     states.shift();
//     states.map(state =>{
//       let stateName = state[0];
//       let stateCode = state[2];
//       stateIndex[stateName] = stateCode
//     });
//   return stateIndex;
//   })
//   .catch(err => console.log(err))

// }

// StateEncoder();



// should use &key=${secretOrKey}
const fetchStatePop = async (stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=state:${stateCode}`, {
    method: "GET"
  })
    .then(res => res.json())
    .then(json => json)

  return response;
}



// fetchStatePop("06");

// & key=${ secretOrKey }

const fetchIncomeBracket = async(bracketCode, stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/acs/acs1/subject?get=NAME,${bracketCode}&for=state:${stateCode}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(json => json)
    
  return response;
}

// & key=${ secretOrKey }

const fetchLuxuryPercent = async(stateCode) => {

  let response = await fetch(
    `https://api.census.gov/data/2018/acs/acs1/profile?get=NAME,DP04_0088PE&for=state:${stateCode}`, {
      method: "GET"
  })
    .then(res => res.json())
    .catch(err=> err)
    .then(json => json)

  return response;
}

module.exports = { fetchIncomeBracket, fetchStatePop, fetchLuxuryPercent }
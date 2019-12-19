/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./keys_dev */ "./config/keys_dev.js");
}

/***/ }),

/***/ "./config/keys_dev.js":
/*!****************************!*\
  !*** ./config/keys_dev.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  secretOrKey: "2fe43e6309e00333d4f7f2c984bf7ac1c895276d"
}

/***/ }),

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { fetchIncomeBracket, fetchStatePop, fetchLuxuryPercent } = __webpack_require__(/*! ../src/utils */ "./src/utils.js");

// PERCENTAGE OF HOMES OVER A MILLION

const fetchMillion = (stateCode, graph) => {
 
  fetchLuxuryPercent(stateCode).then(data=>{
    data.shift();

    let state = data[0]
    let name = [state[0]]
    let housePercent = state[1] ? [state[1]] : [0]

    d3.select(graph)
      .selectAll("p")
      .remove("p");

    d3.select(graph)
      .selectAll("div")
      .remove("div");

    d3.select(graph)
      .selectAll("p")
      .data(name)
      .enter()
      .append("p")
      .transition()
      .delay(250)
      .text(function (name) { return name })

    d3.select(graph)
      .selectAll("div")
      .data(housePercent)
      .enter()
      .append("div")
      .transition()
      .delay(1000)
      .text(function (housePercent) { return housePercent + '%' })
      .style("width", function (housePercent) { return housePercent * 30 + 'px' })

  })
}


// STATE POPULATION

const fetchTotalPop = (stateCode, graph) => {
  
  fetchStatePop(stateCode).then(data =>{ 
    data.shift();

    let state = data[0]
    let name = [state[0]]
    let population = [state[1]]
    // popAnnotate : (population / 1000000).toString().slice(0, 3)

    d3.select(graph)
      .selectAll("p")
      .remove("p");

    d3.select(graph)
      .selectAll("div")
      .remove("div");

    d3.select(graph)
      .selectAll("p")
      .data(name)
      .enter()
      .append("p")
      .transition()
      .delay(250)
      .text(function (name) { return name })

    d3.select(graph)
      .selectAll("div")
      .data(population)
      .enter()
      .append("div")
      .transition()
      .delay(1000)
      .text(function (population) { return (population / 1000000).toString().slice(0, 4); })
      .style("width", function (population) { return population/100000 + 'px' })

    // SVG CIRCLE RENDER CODE

    // d3.select(graph)
    //   .selectAll("div")
    //   .remove("div");

    // d3.select(graph)
    //   .selectAll("p")
    //   .remove("p");


    // let size = d3.scaleLinear()
    //   .domain([0, 40000000])
    //   .range([10, 250])

    // let svg = d3.select(graph) 
    //           .append("svg")
    //   .attr("width", 300)
    //   .attr("height", 300);  

    // svg.select(graph)
    //   .selectAll("circle")
    //   .data(population)
    //   .enter()
    //   .append("circle")
    //   .transition()
    //   .delay(1000)
    //   .attr("class", "node")
    //   .style("stroke", "gray")
    //   .style("fill", "blue")
    //   .attr("r", function (population) { return size(population) })
    //   .attr("cx", 150)
    //   .attr("cy", 150)


    // d3.select(graph)
    //   .selectAll("p")
    //   .data(name)
    //   .enter()
    //   .append("p")
    //   .transition()
    //   .delay(250)
    //   .text(function (name) { return 'Total Population: ' + name })


  })
}


// INCOME BRACKET FUNCTIONS

const fetchIncomePercent = (bracket, state, graph) => {

  fetchIncomeBracket(bracket, state).then(data => {
    data.shift();

    let state = data[0]
    let name = [state[0]]
    let popPercent = state[1] ? [state[1]] : [0]

      
    d3.select(graph)
      .selectAll("div")
      .remove("div");

    d3.select(graph)
      .selectAll("p")
      .remove("p");

    d3.select(graph)
      .selectAll("p")
      .data(name)
      .enter()
      .append("p")
      .transition()
      .delay(250)
      .text(function (name) { return name })
    
    d3.select(graph)
      .selectAll("div")
      .data(popPercent)
      .enter()
      .append("div")
      .transition()
      .delay(1000)
      .style("height", function (popPercent) { return popPercent*15 + 'px' })
      .text(function (popPercent) { return popPercent + '%'; })

    
  })
}

const stateASelect = () =>{
 let stateACode = stateA.options[stateA.selectedIndex].value

  if (stateACode!="default") {
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket"){

      fetchIncomePercent(bracketCode, stateACode, "#Graph-Display1");
      fetchTotalPop(stateACode, "#Graph-Display1Pop");
      fetchMillion(stateACode, "#Graph-Display1Million");
  
    }else{
      d3.select("#Graph-Display1")
        .selectAll("div")
        .remove("div");
      d3.select("#Graph-Display1Pop")
        .selectAll("div")
        .remove("div");
      d3.select("#Graph-Display1Million")
        .selectAll("div")
        .remove("div");

      d3.select("#Graph-Display1")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display1Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display1Million")
        .selectAll("p")
        .remove("p");
    }
    
  }else{
    d3.select("#Graph-Display1")
      .selectAll("div")
      .remove("div");
    d3.select("#Graph-Display1Pop")
      .selectAll("div")
      .remove("div");
    d3.select("#Graph-Display1Million")
      .selectAll("div")
      .remove("div");

    d3.select("#Graph-Display1")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display1Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display1Million")
      .selectAll("p")
      .remove("p");
  }
};

const stateBSelect = () => {

  let stateBCode = stateB.options[stateB.selectedIndex].value
  

  if (stateBCode != "default") {

    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomePercent(bracketCode, stateBCode, "#Graph-Display2")
      fetchTotalPop(stateBCode, "#Graph-Display2Pop");
      fetchMillion(stateBCode, "#Graph-Display2Million");

    } else {
      d3.select("#Graph-Display2")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display2Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display2Million")
        .selectAll("div")
        .remove("div")

      d3.select("#Graph-Display2")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display2Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display2Million")
        .selectAll("p")
        .remove("p");
    }

  } else {
    d3.select("#Graph-Display2")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display2Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display2Million")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display2")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display2Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display2Million")
      .selectAll("p")
      .remove("p");
  }
};

const stateCSelect = () => {

  let stateCCode = stateC.options[stateC.selectedIndex].value

  if (stateCCode != "default") {
    
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomePercent(bracketCode, stateCCode, "#Graph-Display3")
      fetchTotalPop(stateCCode, "#Graph-Display3Pop");
      fetchMillion(stateCCode, "#Graph-Display3Million");

    } else {
      d3.select("#Graph-Display3")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display3Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display3Million")
        .selectAll("div")
        .remove("div")

      d3.select("#Graph-Display3")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display3Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display3Million")
        .selectAll("p")
        .remove("p");
    }
  } else {
    d3.select("#Graph-Display3")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display3Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display3Million")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display3")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display3Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display3Million")
      .selectAll("p")
      .remove("p");
  }
};

const stateDSelect = () => {

  let stateDCode = stateD.options[stateD.selectedIndex].value

  if (stateDCode != "default") {
    
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomePercent(bracketCode, stateDCode, "#Graph-Display4")
      fetchTotalPop(stateDCode, "#Graph-Display4Pop");
      fetchMillion(stateDCode, "#Graph-Display4Million");

    } else {
      d3.select("#Graph-Display4")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display4Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display4Million")
        .selectAll("div")
        .remove("div")

      d3.select("#Graph-Display4")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display4Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display4Million")
        .selectAll("p")
        .remove("p");
    }
  } else {
    d3.select("#Graph-Display4")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display4Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display4Million")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display4")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display4Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display4Million")
      .selectAll("p")
      .remove("p");
  }
};

const stateESelect = () => {
  
  let stateECode = stateE.options[stateE.selectedIndex].value

  if (stateECode != "default") {
    
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomePercent(bracketCode, stateECode, "#Graph-Display5")
      fetchTotalPop(stateECode, "#Graph-Display5Pop");
      fetchMillion(stateECode, "#Graph-Display5Million");

    } else {
      d3.select("#Graph-Display5")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display5Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display5Million")
        .selectAll("div")
        .remove("div")

      d3.select("#Graph-Display5")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display5Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display5Million")
        .selectAll("p")
        .remove("p");
    }
  } else {
    d3.select("#Graph-Display5")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display5Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display5Million")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display5")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display5Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display5Million")
      .selectAll("p")
      .remove("p");
  }
}


const bracketSelect = () =>{

  let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;
  if (bracketCode != "defaultBracket"){

    let stateACode = stateA.options[stateA.selectedIndex].value
    let stateBCode = stateB.options[stateB.selectedIndex].value
    let stateCCode = stateC.options[stateC.selectedIndex].value
    let stateDCode = stateD.options[stateD.selectedIndex].value
    let stateECode = stateE.options[stateE.selectedIndex].value
    
    if (stateACode != "default") {

      fetchIncomePercent(bracketCode, stateACode, "#Graph-Display1")
      fetchTotalPop(stateACode, "#Graph-Display1Pop")
      fetchMillion(stateACode, "#Graph-Display1Million")     
    }
    if (stateBCode !="default") {

      fetchIncomePercent(bracketCode, stateBCode, "#Graph-Display2")
      fetchTotalPop(stateBCode, "#Graph-Display2Pop")
      fetchMillion(stateBCode, "#Graph-Display2Million")
          
    }
    if (stateCCode != "default") {

      fetchIncomePercent(bracketCode, stateCCode, "#Graph-Display3")
      fetchTotalPop(stateCCode, "#Graph-Display3Pop")
      fetchMillion(stateCCode, "#Graph-Display3Million")
    }
    if (stateDCode != "default") {

      fetchIncomePercent(bracketCode, stateDCode, "#Graph-Display4")
      fetchTotalPop(stateDCode, "#Graph-Display4Pop")
      fetchMillion(stateDCode, "#Graph-Display4Million");

    }
    if (stateECode != "default") {

      fetchIncomePercent(bracketCode, stateECode, "#Graph-Display5")
      fetchTotalPop(stateECode, "#Graph-Display5Pop")
      fetchMillion(stateECode, "#Graph-Display5Million");

    }else{
      d3.select("#Graph-Display1")
        .selectAll("div")
        .remove("div");
      d3.select("#Graph-Display1Pop")
        .selectAll("div")
        .remove("div");
      d3.select("#Graph-Display1Million")
        .selectAll("div")
        .remove("div");

      d3.select("#Graph-Display1")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display1Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display1Million")
        .selectAll("p")
        .remove("p");

      d3.select("#Graph-Display2")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display2Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display2Million")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display2")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display2Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display2Million")
        .selectAll("p")
        .remove("p");

      d3.select("#Graph-Display3")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display3Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display3Million")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display3")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display3Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display3Million")
        .selectAll("p")
        .remove("p");

      d3.select("#Graph-Display4")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display4Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display4Million")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display4")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display4Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display4Million")
        .selectAll("p")
        .remove("p");

      d3.select("#Graph-Display5")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display5Pop")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display5Million")
        .selectAll("div")
        .remove("div")
      d3.select("#Graph-Display5")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display5Pop")
        .selectAll("p")
        .remove("p");
      d3.select("#Graph-Display5Million")
        .selectAll("p")
        .remove("p");
    }
  }else{
    d3.select("#Graph-Display1")
      .selectAll("div")
      .remove("div");
    d3.select("#Graph-Display1Pop")
      .selectAll("div")
      .remove("div");
    d3.select("#Graph-Display1Million")
      .selectAll("div")
      .remove("div");
    d3.select("#Graph-Display1")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display1Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display1Million")
      .selectAll("p")
      .remove("p");

    d3.select("#Graph-Display2")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display2Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display2Million")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display2")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display2Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display2Million")
      .selectAll("p")
      .remove("p");

    d3.select("#Graph-Display3")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display3Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display3Million")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display3")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display3Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display3Million")
      .selectAll("p")
      .remove("p");

    d3.select("#Graph-Display4")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display4Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display4Million")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display4")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display4Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display4Million")
      .selectAll("p")
      .remove("p");

    d3.select("#Graph-Display5")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display5Pop")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display5Million")
      .selectAll("div")
      .remove("div")
    d3.select("#Graph-Display5")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display5Pop")
      .selectAll("p")
      .remove("p");
    d3.select("#Graph-Display5Million")
      .selectAll("p")
      .remove("p");
  }
}

const incomeBracket = document.getElementById("econ-ind")
incomeBracket.addEventListener("change", bracketSelect)

const stateA = document.getElementById("stateA")
stateA.addEventListener("change", stateASelect)

const stateB = document.getElementById("stateB")
stateB.addEventListener("change", stateBSelect)

const stateC = document.getElementById("stateC")
stateC.addEventListener("change", stateCSelect)

const stateD = document.getElementById("stateD")
stateD.addEventListener("change", stateDSelect)

const stateE = document.getElementById("stateE")
stateE.addEventListener("change", stateESelect)



/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

const {secretOrKey} = __webpack_require__(/*! ../config/keys */ "./config/keys.js");


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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
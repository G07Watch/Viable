

const { fetchIncomeBracket } = require("../src/utils");

const fetchIncomeBracketA = (bracket, state) => {

  fetchIncomeBracket(bracket, state).then(data => {
    data.shift();

    let state = data[0]
    let popPercent = [state[1]]

    d3.select("#Graph-Display1")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display1")
      .selectAll("div")
      .data(popPercent)
      .enter()
      .append("div")
      .style("width", function (popPercent) { return (popPercent * 20) + 'px' })
      .text(function (popPercent) { return popPercent + '%'; })

  })
}

const fetchIncomeBracketB = (bracket, state) => {

  fetchIncomeBracket(bracket, state).then(data => {
    data.shift();

    let state = data[0]
    let popPercent = [state[1]]

    d3.select("#Graph-Display2")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display2")
      .selectAll("div")
      .data(popPercent)
      .enter()
      .append("div")
      .style("width", function (popPercent) { return (popPercent * 20) + 'px' })
      .text(function (popPercent) { return popPercent + '%'; })

  })
}
const fetchIncomeBracketC = (bracket, state) => {

  fetchIncomeBracket(bracket, state).then(data => {
    data.shift();

    let state = data[0]
    let popPercent = [state[1]]

    d3.select("#Graph-Display3")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display3")
      .selectAll("div")
      .data(popPercent)
      .enter()
      .append("div")
      .style("width", function (popPercent) { return (popPercent * 20) + 'px' })
      .text(function (popPercent) { return popPercent + '%'; })

  })
}
const fetchIncomeBracketD = (bracket, state) => {

  fetchIncomeBracket(bracket, state).then(data => {
    data.shift();

    let state = data[0]
    let popPercent = [state[1]]

    d3.select("#Graph-Display4")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display4")
      .selectAll("div")
      .data(popPercent)
      .enter()
      .append("div")
      .style("width", function (popPercent) { return (popPercent * 20) + 'px' })
      .text(function (popPercent) { return popPercent + '%'; })

  })
}
const fetchIncomeBracketE = (bracket, state) => {

  fetchIncomeBracket(bracket, state).then(data => {
    data.shift();

    let state = data[0]
    let popPercent = [state[1]]

    d3.select("#Graph-Display5")
      .selectAll("div")
      .remove("div")

    d3.select("#Graph-Display5")
      .selectAll("div")
      .data(popPercent)
      .enter()
      .append("div")
      .style("width", function (popPercent) { return (popPercent * 20) + 'px' })
      .text(function (popPercent) { return popPercent + '%'; })

  })
}

const stateASelect = () =>{
  console.log("A Select Fired!")
 let stateACode = stateA.options[stateA.selectedIndex].value

  if (stateACode!="default") {
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket"){

      fetchIncomeBracketA(bracketCode, stateACode)
  
    }else{
      d3.select("#Graph-Display1")
        .selectAll("div")
        .remove("div")
    }
    
  }else{
    d3.select("#Graph-Display1")
      .selectAll("div")
      .remove("div")
  }
};

const stateBSelect = () => {
  console.log("B Select Fired!")
  let stateBCode = stateB.options[stateB.selectedIndex].value
  

  if (stateBCode != "default") {

    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomeBracketB(bracketCode, stateBCode)

    } else {
      d3.select("#Graph-Display2")
        .selectAll("div")
        .remove("div")
    }

  } else {
    d3.select("#Graph-Display2")
      .selectAll("div")
      .remove("div")
  }
};

const stateCSelect = () => {
  console.log("C Select Fired!")
  let stateCCode = stateC.options[stateC.selectedIndex].value

  if (stateCCode != "default") {
    
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomeBracketC(bracketCode, stateCCode)

    } else {
      d3.select("#Graph-Display3")
        .selectAll("div")
        .remove("div")
    }
  } else {
    d3.select("#Graph-Display3")
      .selectAll("div")
      .remove("div")
  }
};

const stateDSelect = () => {
  console.log("D Select Fired!")
  let stateDCode = stateD.options[stateD.selectedIndex].value

  if (stateDCode != "default") {
    
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomeBracketD(bracketCode, stateDCode)

    } else {
      d3.select("#Graph-Display4")
        .selectAll("div")
        .remove("div")
    }
  } else {
    d3.select("#Graph-Display4")
      .selectAll("div")
      .remove("div")
  }
};

const stateESelect = () => {
  console.log("E Select Fired!")
  let stateECode = stateE.options[stateE.selectedIndex].value

  if (stateECode != "default") {
    
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomeBracketE(bracketCode, stateECode)

    } else {
      d3.select("#Graph-Display5")
        .selectAll("div")
        .remove("div")
    }
  } else {
    d3.select("#Graph-Display5")
      .selectAll("div")
      .remove("div")
  }
}


const bracketSelect = () =>{
  console.log('Bracket Select Fired!')
  let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;
  if (bracketCode != "defaultBracket"){

    let stateACode = stateA.options[stateA.selectedIndex].value
    let stateBCode = stateB.options[stateB.selectedIndex].value
    let stateCCode = stateC.options[stateC.selectedIndex].value
    let stateDCode = stateD.options[stateD.selectedIndex].value
    let stateECode = stateE.options[stateE.selectedIndex].value
    
    if (stateACode != "default") {

      fetchIncomeBracketA(bracketCode, stateACode)
     
    }
    if (stateBCode !="default") {

      fetchIncomeBracketB(bracketCode, stateBCode)
          
    }
    if (stateCCode != "default") {

      fetchIncomeBracketC(bracketCode, stateCCode)

    }
    if (stateDCode != "default") {

      fetchIncomeBracketD(bracketCode, stateDCode)

    }
    if (stateECode != "default") {

      fetchIncomeBracketE(bracketCode, stateECode)

    }else{
      d3.select("#Graph-Display1")
        .selectAll("div")
        .remove("div");

      d3.select("#Graph-Display2")
        .selectAll("div")
        .remove("div");

      d3.select("#Graph-Display3")
        .selectAll("div")
        .remove("div");

      d3.select("#Graph-Display4")
        .selectAll("div")
        .remove("div");

      d3.select("#Graph-Display5")
        .selectAll("div")
        .remove("div");
    }
  }else{
    d3.select("#Graph-Display1")
      .selectAll("div")
      .remove("div");

    d3.select("#Graph-Display2")
      .selectAll("div")
      .remove("div");

    d3.select("#Graph-Display3")
      .selectAll("div")
      .remove("div");

    d3.select("#Graph-Display4")
      .selectAll("div")
      .remove("div");

    d3.select("#Graph-Display5")
      .selectAll("div")
      .remove("div");
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
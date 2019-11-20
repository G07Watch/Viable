

const { fetchIncomeBracket } = require("../src/utils");

// let bracketCode = { code: "S0501_C03_080E"}
// let stateACode = {stateA: "01"}


const stateASelect = () =>{
 let stateACode = stateA.options[stateA.selectedIndex].value
  console.log(stateACode)
}

const bracketSelect = () =>{
  let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;
  if (bracketCode != "defaultBracket"){

    let stateACode = stateA.options[stateA.selectedIndex].value
    
    fetchIncomeBracket(bracketCode, stateACode).then(data => {
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
  }else{
    d3.select("#Graph-Display1")
      .selectAll("div")
      .remove("div")
  }
    
}

const incomeBracket = document.getElementById("econ-ind")
incomeBracket.addEventListener("change", bracketSelect)

const stateA = document.getElementById("stateA")
stateA.addEventListener("change", stateASelect)
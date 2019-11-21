const { fetchIncomeBracket } = require("../src/utils");


const fetchIncomeBracketA = (bracket, state)=>{

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

// const stateASelect = () => {
//   let stateACode = stateA.options[stateA.selectedIndex].value
//   console.log("stateACode",stateACode)

//   if (stateACode != "default") {
//     let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

//     if (bracketCode != "defaultBracket") {

//       fetchIncomePercent(bracketCode, stateACode)

//     } else {
//       d3.select("#Graph-Display1")
//         .selectAll("div")
//         .remove("div")
//     }

//   } else {
//     d3.select("#Graph-Display1")
//       .selectAll("div")
//       .remove("div")
//   }
// }

const stateBSelect = () => {
  let stateBCode = stateB.options[stateB.selectedIndex].value
  console.log("stateBcode", stateBCode)

  if (stateACode != "default") {
    let bracketCode = incomeBracket.options[incomeBracket.selectedIndex].value;

    if (bracketCode != "defaultBracket") {

      fetchIncomePercent(bracketCode, stateACode)

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
}

module.exports={stateASelect, fetchIncomeBracketA}
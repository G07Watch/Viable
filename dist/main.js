const { fetchIncomeBracket, fetchStatePop, fetchLuxuryPercent } = require("../src/utils");

// PERCENTAGE OF HOMES OVER A MILLION

const fetchMillion = (stateCode, graph) => {
  console.log("Fired Million!")
  fetchLuxuryPercent(stateCode).then(data=>{
    data.shift();

    let state = data[0]
    let name = [state[0]]
    let housePercent = state[1] ? [state[1]] : [0]

    d3.select(graph)
      .selectAll("div")
      .remove("div");

    d3.select(graph)
      .selectAll("p")
      .remove("p");

    d3.select(graph)
      .selectAll("div")
      .data(housePercent)
      .enter()
      .append("div")
      .transition()
      .delay(1000)
      .style("width", function (housePercent) { return housePercent * 30 + 'px' })
      .text(function (housePercent) { return housePercent + '%' })

    d3.select(graph)
      .selectAll("p")
      .data(name)
      .enter()
      .append("p")
      .transition()
      .delay(250)
      .text(function (name) { return name })

  })
}


// STATE POPULATION

const fetchTotalPop = (stateCode, graph) => {
  console.log("Fired Total Population!")
  fetchStatePop(stateCode).then(data =>{ 
    data.shift();

    let state = data[0]
    let name = [state[0]]
    let population = [state[1]]
    let popAnnotate = (population / 1000000).toString().slice(0, 3)

    // console.log("Graph", graph)
    // console.log("name", name)
    // console.log("Population", population)

    d3.select(graph)
      .selectAll("div")
      .remove("div");

    d3.select(graph)
      .selectAll("p")
      .remove("p");

    d3.select(graph)
      .selectAll("div")
      .data(population)
      .enter()
      .append("div")
      .transition()
      .delay(1000)
      .style("width", function (population) { return population/50000 + 'px' })
      .text(function (population) { return (population / 1000000).toString().slice(0, 4); })

    d3.select(graph)
      .selectAll("p")
      .data(name)
      .enter()
      .append("p")
      .transition()
      .delay(250)
      .text(function (name) { return name })

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


    // console.log("Graph",graph)
    // console.log("State", state)
    // console.log("Percentage", popPercent)

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
  console.log("A Select Fired!")
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
  console.log("B Select Fired!")
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
  console.log("C Select Fired!")
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
  console.log("D Select Fired!")
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
  console.log("E Select Fired!")
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
  console.log('Bracket Select Fired!')
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


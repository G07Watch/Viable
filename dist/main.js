const {income} = require("../src/utils");

// document.addEventListener("DOMContentLoaded", function () {

//   const canvas = document.getElementById('Viable-Viewer');
//   // canvas.width = 500;
//   // canvas.width = 500;
//   const ctx = canvas.getContext('2d')

//   ctx.fillStyle = "red";
//   ctx.fillRect(10, 10, 500, 500);


//   ctx.beginPath();
//   ctx.arc(200, 100, 75, 0, 2 * Math.PI);
//   ctx.strokeStyle = 'blue';
//   ctx.lineWidth = 10;
//   ctx.stroke();


// });

d3.select('h1')
.style ("color", "red"); 

income.then(data =>{
  data.shift();


  let state = data[0]
  let popPercent = [state[1]]
  console.log("The Income Bracket data", data);
  console.log("The Income Bracket state", state);
  console.log("Populaton percentage", popPercent);

  return (
    d3.select('body')
    .selectAll('div')
    .data(popPercent)
    .enter()
    // .append('p')
    // .text(function (state) { return state; })
    .append("div")
    .style("width", function ( popPercent ) { return (popPercent *10) + 'px' })
    .text(function (popPercent) { return '$ ' + popPercent; })
    )
} )


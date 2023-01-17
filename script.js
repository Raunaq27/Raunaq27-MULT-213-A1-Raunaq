import data from './meteorites.json' assert { type: 'json' };
const output = document.getElementById("output");
const bigMass = document.getElementById("bigMass");

let html = "";
let mostMass = 0
let mostMassI = 0
for (let i = 0; i < data.length; i++) {

    let currentMass = parseInt(data[i].mass)

    if (mostMass < currentMass) {
        mostMass = currentMass
        mostMassI = i
    } else {

    }

    // html += `<p>${data[i].name}: ${data[i].recclass}</p>`;
    html += `<div class="box">
    <div class="row">
        <div class="col"> ID : ${data[i].id}</div>
        <div class="col">Name : ${data[i].name}</div>
    </div>
    <div class="row"> Nametype : ${data[i].nametype}</div>
    <div class="row">Class : ${data[i].recclass}</div>
    <div class="row">Mass : ${data[i].mass} Tons</div>
    <div class="row"> Fall : ${data[i].fall}</div>
    <div class="row">Year : ${data[i].year}</div>
    <div class="row">
        <div class="col">Latitude : ${data[i].reclat}</div>
        <div class="col">Longitude : ${data[i].reclong}</div>
    </div>
</div>`
}
bigMass.innerHTML = `<div>The meteorite with the biggest mass is ${data[mostMassI].name} with a mass of ${data[mostMassI].mass} tons, its ID is ${data[mostMassI].id} </div>`

output.innerHTML = html;
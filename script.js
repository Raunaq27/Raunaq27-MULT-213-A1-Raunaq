import data from './meteorites.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";
for (let i = 0; i < data.length; i++) {
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
output.innerHTML = html;
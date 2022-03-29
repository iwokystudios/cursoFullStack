// Array with objects of places contries
const places = [
    {name: "London", img: "./img/londres.jpg"},
    {name: "Barcelona", img: "./img/barcelona.jpg"},
    {name: "Paris", img: "./img/paris.jpg"}
];


function placeTemplate(place) {

    return `
 <div class="card">
    <div class="contentImg">
        <img src='${place.img}'/>
    </div>
    <div class="content">
    ${place.name}
    </div>
 </div>    
    `;
}

function init() {

    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));
}
window.onload = init;
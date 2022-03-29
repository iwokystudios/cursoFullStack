// Array with objects of places contries
const places = [
    {name: "London", img: "./img/londres.jpg"},
    {name: "Barcelona", img: "./img/barcelona.jpg"},
    {name: "Paris", img: "./img/paris.jpg"}
];


function placeTemplate(place) {

    return `
    <div>
        <div>
            <img width='300px' src='${place.img}'/>
        </div>
        <div>
            <h2>${place.name}</h2>
        </div>
    </div>
    `;
}


function init() {

    const main = document.getElementById("main");
   
   places.map((place, i) => {

    main.innerHTML += placeTemplate(place);

    });
}
window.onload = init;
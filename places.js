let places = [
    { nombre: "Barcelona", img: "barcelona.jpg" },
    { nombre: "Londres", img: "londres.jpg" },
    { nombre: "Paris", img: "paris.jpg" }
];
window.onload = init();

function placeTemplate(place) {


}

function init() {
    const main = document.getElementById("main");
    main.innerHTML = `
    <div> 
        <div>
            <img width='100px' src='${places[0].img}'/> 
        </div>
        <div>
        ${places[0].nombre}
        </div>
   
    </div>`;
}

function init() {
    const main = document.getElementById("main");
    places.map((place, placeIndex) => {
        main.innerHTML += placeTemplate(place);
    });
}
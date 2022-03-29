const places =  [
    {
        name: "Barcelona", img: "img/barcelona.jpg"
    },
    {
        name: "Londres", img: "img/londres.jpg"
    },
    {
        name: "París", img: "img/paris.jpg"
    } 
];

function placeTemplate(place) {
    return `
    <div>
        <div>
            <img width='100px' src='${place.img}'/>
        </div>
        <div>
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
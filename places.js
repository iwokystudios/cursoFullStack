const places = [
    { name : "Barcelona", img : "barcelona.jpg"},

    { name : "Londres", img : "londres.jpg"},

    { name : "Paris", img : "paris.jpg"},

];

function placeTemplate(place) {
    return; `
    <div>
        <div>
            <img width='300px' src='${places[0].img}'/>
        </div>
        <div>
            ${places[0].name};
        </div>
    </div>
    `;

}


function init() {
    const main = document.getElementById("main");
    
    places.map((place) => {main.innerHTML += placeTemplate(place));

}

window.onload = init;

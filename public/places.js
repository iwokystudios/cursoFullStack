

function muestraPaises() {
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = muestraContenido;
    peticion.open('GET', 'http://localhost:3000/ciudades', 'true');
    peticion.send();
}


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

function muestraContenido() {
    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));
}

// window.onload = init;

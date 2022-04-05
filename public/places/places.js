function muestraPaises() {
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => {
        if (peticion.readyState == 0) {
            console.log("Petición no iniciada");
        }
        if (peticion.readyState == 1) {
            console.log("Conexión con el servidor establecida");
        }
        if (peticion.readyState == 2) {
            console.log("El servidor ha recibido la petición");
        }
        if (peticion.readyState == 3) {
            console.log("Se está procesando la petición");
        }                
        if(peticion.readyState == 4) {
            console.log("Hemos recibido la respuesta del servidor");
            const respuesta = JSON.parse(peticion.responseText);
            const main = document.getElementById("main");
            respuesta.map(item => main.innerHTML += placeTemplate(item));
        }
    };
    peticion.open('GET', 'http://localhost:3000/ciudades', true);
    peticion.send(null);
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

function init() {
    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));
}

window.onload = init;

function muestraPaises() {
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => {
        if(peticion.readyState == 4) {
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






// window.onload = init;

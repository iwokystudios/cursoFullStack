
const places01 =  [
    {
        name: "Barcelona", img: "barcelona.jpg"
    },
    {
        name: "Londres", img: "londres.jpg"
    },
    {
        name: "París", img: "paris.jpg"
    } 
];

function muestraCiudades() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if(http.readyState === 4) {
            const respuesta = JSON.parse(http.responseText);
            const main = document.getElementById("main");
            respuesta.map(item => main.innerHTML += placeTemplate(item));
            console.log(respuesta);
        }
    };
    http.open('GET', 'http://localhost:3000/ciudades', true);
    http.send(null);
}

function placeTemplate(place) {
    return `
    <div class="card">
        <div class="card-img">
            <img src="${place.img}" alt="">
            <div class="card-img-text">
                <h4>${place.name}</h4>
                <span>7 noche/s</span>
            </div>
            <span class="discount-corner">-21%</span>
        </div>
        <div class="card-text">
            <div class="card-rate">
                <span class="rate-number">8.1</span>
                <span class="rate-level">Excelente</span>
                <span class="opinion">(165 Opiniones)</span>
            </div>
            <div class="card-offer">
                <span class="since">
                    desde
                </span>
                <span class="old-price">
                    862€
                </span>
            </div> 
            <div class="card-price">
                1.056
                <span class="euro-symbol">€</span>
            </div>
            <a href="#" class="btn card-btn">VER MÁS</a>
        </div>
    </div>
    `;
}

function muestraContenido() {
    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));

}

// window.onload = init;
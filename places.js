const places =  [
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

function placeTemplate(place) {
    return `
        <div class="imagen">
                 
                 <img width='100px' src='${place.img}'/> 
        </div>
                                            <br><br>
        <div class="info">
                 <p class="opi"> Opiniones </p>
        </div>

                                            <br><br>

        <div class="precio">
                <p class="prec"> Ahora 899€ </p>
                ${place.name}
        </div>
    `;
}

function init() {
    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));
}

window.onload = init;












//     // <div>
//     //     <div>
//     //         <img width='100px' src='${place.img}'/> 
//     //     </div>
//     //     <div>
//     //     ${place.name}
//     //     </div>
//     // </div>

// Definición de función
function verListadoCoches() {

}
// Definición de función anónima
const verListado = function(current, index) {
    console.log(index, current);
};
// Definición de función arrow
const procesaLista = (current, index) => {
    console.log(index, current);
};

const list = ["mercedes", "masserati", "lamborghini", "ferrari", "fiat"];
const marcas = [
    { name: "mercedes", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/C.C.C.-Logo.svg/1200px-C.C.C.-Logo.svg.png"},
    { name: "mercedes", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.motor16.com%2Fmarcas%2Fmercedes-benz%2F&psig=AOvVaw0nx1C-VrQhf6D02Juo9Rls&ust=1648556089990000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPic1ZPk6PYCFQAAAAAdAAAAABAD"},
]; 

function init() {
    const main = document.getElementById("main");
    main.innerHTML = "<img width='100px' src='" + marcas[0].img+ "'/>";
}

function init2() {
    const main = document.getElementById("main");
    const parrafos = document.getElementsByTagName("p");

    // Método clásico para recorrer listas
    // for(let i = 0; i < list.length; i++) {
    //     console.log(list[i]);
    // }
    // Con map recorremos los elementos de una lista
    // He pasado la referencia de una función
    list.map((marca, index) => {
        main.innerHTML += "<p>" + marca + "</p>";
    });

    for(let i = 0; i < parrafos.length; i++) {
        parrafos[i].innerHTML += " :)";
    }

}


const places = [
    {
        name: "Barcelona", img:"barcelona.jpg"
    },
    {
        name: "Londres", img:"londres.jpg"
    },
    {
        name: "Paris", img:"paris.jpg"
    }
];


function init() {
    const main = document.getElementById("main");
    places.map((places)=> {
    main.innerHTML += placeTemplate(place);
    `<div>
        <div>
    <img width='100px' src='${places[0].img}'/>
    </div>
    <div>
        ${places[0].name}
    </div>
`;
places.map((place,placeIndex)=>{
;})
}


window.onload = init;


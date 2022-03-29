const places = [
    { 
        name: "barcelona", img: "barcelona.jpg"
    },
    {
         name: "londres", img: "londres.jpg"
    },
    {
         name: "paris", img: "paris.jpg"
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
       `

}



function init() {
    const main = document.getElementById("main");
    
    places.map((place, placeIndex) => {
    
        main.innerHTML += placeTemplate(place);
});
}


// function init2() {
//     const main = document.getElementById("main");
//     const parrafos = document.getElementsByTagName("p");

//     // Método clásico para recorrer listas
//     // for(let i = 0; i < list.length; i++) {
//     //     console.log(list[i]);
//     // }
//     // Con map recorremos los elementos de una lista
//     // He pasado la referencia de una función
//     list.map((places, index) => {
//         main.innerHTML += "<p>" + places + "</p>";
//     });

//     for(let i = 0; i < parrafos.length; i++) {
//         parrafos[i].innerHTML += " :)";
//     }

// }

window.onload = init;

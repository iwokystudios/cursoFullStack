const places = [{ name: "Barcelona", img: "barcelona.jpg" },
{ name: "Londres", img: "londres.jpg" },
{ name: "Paris", img: "paris.jpg" }];
function placeTemplate(place) {

    return main.innerHTML = `<div class="card">
    <div class="contImg"> <img width='350px' src='${place.img}'/></div>
    <div class="contDes">${place.name}</div>
    </div>`;

}
function init() {
    const main = document.getElementById("main");

    places.map((place, placeIndex) => {
        main.innerHTML += placeTemplate(place);
    });
}
window.onload = init;
// const main = document.getElementById("main");
//     places.map((marca, index) => {
//         main.innerHTML = `<div>
//         <div> <img width='350px' src='${places[index].img}'/></div>
//         <div>${places[index].name}</div>
//         </div>`;
//     });

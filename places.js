
const places = [
    {name: "Valencia", img: "https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389__480.jpg"},
    {name: "Barcelona", img: "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/spain/barcelona/destinations-barcelona-banner-mobile-1024x553.jpg"},
    {name: "Madrid", img: "https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg"},
    {name: "Malaga", img: "https://cdn.getyourguide.com/img/location/540dc85da2a04-m1409276338.jpg/88.jpg"}
]

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


function placeTemplate(place) {
    return `
    <div class="card">
        <div class="card-img">
            <img src="${place.img}" alt="">
            <div class="card-img-text"><p>Texto de imagen</p></div>
        </div>
        <div class="card-text">
            <h4>${place.name}</h4>
            <p></p>
        </div>
    </div>
    `;
}

function init() {
    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));

}

window.onload = init;
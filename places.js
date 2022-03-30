
const places = [
    {name: "Valencia", img: "https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389__480.jpg"},
    {name: "Barcelona", img: "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/spain/barcelona/destinations-barcelona-banner-mobile-1024x553.jpg"},
    {name: "Madrid", img: "https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg"},
    {name: "Malaga", img: "https://cdn.getyourguide.com/img/location/540dc85da2a04-m1409276338.jpg/88.jpg"},
    {name: "Sevilla", img: "https://cdn.getyourguide.com/img/location/60f92d28ea4a1.jpeg/88.jpg"},
    {name: "Toledo", img: "https://image.ondacero.es/clipping/cmsimages02/2021/04/20/2B121D9F-05EA-413F-A4B7-14190FD713CF/69.jpg?crop=669,376,x0,y36&width=1280&height=720&optimize=low"}
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

function init() {
    const main = document.getElementById("main");
    places.map(item => main.innerHTML += placeTemplate(item));

}

window.onload = init;
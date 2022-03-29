const places = [
    {
    name: "Barcelona", img= "Barcelona.jpg"
},

{
name: "Londres", img: "Londres.jpg"
},
{
    name: "Paris", img: "paris.jpg"
}
];

function placetemplate(place) {
    return 
    <div>
        <div>
            <img width='100px' src='${places [0].img}'/>
        </div>
        <div>
        ${places[0].name}
         </div>
         </div>

    function init() {
        const main = document.getElementById("main");
        main.innerHTML=    
    <div>
        <div>
            <img width='100px' src='${places [0].img}'/>
        </div>
        <div>
        ${places[0].name}
         </div>
         </div>
         `;
         places.map((place, placeIndex) => {
             main.innerHTML += placetemplate
         }
         
         window.onload = init;
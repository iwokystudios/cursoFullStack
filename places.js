const places = ["New Zeland", "Islandia", "Jamaica", "Japon", "Brasil"]
const B = [
   { name: "Jamaica", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.es%2FHotel_Review-g1188000-d9553344-Reviews-Kingston_Jamaica-Lamai_Beach_Maret_Ko_Samui_Surat_Thani_Province.html&psig=AOvVaw3j4PDnJ0es5sj9M8IobXZM&ust=1648631453780000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCMjg3fP86vYCFQAAAAAdAAAAABAE"},
   
   { name: "Brasil", img:  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpaulortegagonzalez.net.ve%2Fblog%2Fpost%2Fsao-paulo-brasil&psig=AOvVaw1kF5xksKXKnZBzqf8xB4oz&ust=1648631616113000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNi8lsH96vYCFQAAAAAdAAAAABAE"},
];

function Btemplate(B) {
    return `
    <div>
       <div> 
          <img width='100px' src='${B[0].img}'/>
       </div>
       <div>
          ${B[0].name}
       </div>
    </div>
    `;
 }
   
 function init() { 
        const main = document.getElementById("main");

        B.map((B) => {
            main.innerHTML += placetemplate(B);
    });
}
window.onload = init;
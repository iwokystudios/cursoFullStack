const list = ["medellin", "japan", "los angeles", "chicago", "filipinas"];
const places = [
    { name: "medellin", img: "https://telemedellin.tv/wp-content/uploads/2020/02/corregimientos.jpg"},
]; 

function placetemplate(place) {
  return`

    <div>
<div>
    <img width='100px' src='${places[0].img}'/>
</div>
<div>
    ${places[0].name}
    ${places[1].name}


    </div>
      `;
}
      function init() {
        main=document.getElementById("main");
        places.map(item=> main innerHtml`+`

    }
}
      window.onload=init;
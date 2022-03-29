const list = ["Barcelona", "Londres", "Paris",];
    const places = [
        { name: "Barcelona", img: "barcelona.jpg" 
     },
        { name: "Londres", img: "londres.jpg"
     },
        { name: "Paris", img: "paris.jpg"
     },
    ];

//LAS COMILLAS `` SIRVEN PARA EVITAR PONER MÁS COMILLAS DENTRO DE LA FUNCIÓN.
    function init() {
        const main = document.getElementById("main");
        main.innerHTML =`  
        <div>
            <div>
                <img width='100px' src=' ${places[0].img}'/>
            </div>
          <div>
            ${places[0].name}
          </div>
        </div>`
        ;

        places.map(() => {

        });
    }    

   window.onload = init;
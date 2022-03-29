places = [
    {name : "Barcelona",
    img : "barcelona.jpg"},
    {name : "Londres",
    img : "londres.jpg"},
    {name : "Paris",
    img : "paris.jpg"}];
    
    window.onload = init;


    function init() {
        const main = document.getElementById("main");

        places.map(current => {
            main.innerHTML +=`
            <div>
                <img width ='100px' src='${current.img}'>
            </div>
            <div>
                <p>${current.name}</p>
            </div>
            `;
        })
    }


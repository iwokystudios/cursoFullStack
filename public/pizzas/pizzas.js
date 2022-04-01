const objetoPedido = {
    name: Anthony,
    pedido: [
        "Pizza barbacoa", "Pizza cuatro quesos sin gluten y leche", "Pizza barbacoa"
    ]
};
function perdirpizzas() {
    const objetoConvertidoATexto = JSON.stringify(objetoPedido);

    const peticion = new XMLHttpRequest();

    peticion.onreadystatechange = () => { 
        
    };
    peticion.open('POST', 'http://localhost:3000/pedirPizzas', true);
    peticion.setRequestHeader('Content-Type', "application/json;charset=UTF-8");

    peticion.send(objetoConvertidoATexto);

}
function muestraPizzas() {
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => {
        if (peticion.readyState == 0) {
            console.log("Petición iniciada");
        }
        if (peticion.readyState == 1) {
            console.log("Conexión establecida con el servidor");

        } if (peticion.readyState == 2) {
            console.log("El servidor ha recibido la información");

        } if (peticion.readyState == 3) {
            console.log("Se esta procesando la información");

        } if (peticion.readyState == 4) {
            console.log("Hemos recibido la respuesta del servidor");
            const respuesta = JSON.parse(peticion.responseText);
            const main = document.getElementById("main");
            respuesta.map(item => main.innerHTML += placeTemplate(item))


        }

    }

}
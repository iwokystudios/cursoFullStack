const objetoPedido = {
    name: Anthony,
    pedido: [
        "Pizza barbacoa", "Pizza cuatro quesos sin gluten y leche", "Pizza barbacoa"
    ]
};
function perdirpizzas() {
    objetoConvertidoATexto = JSON.stringify(objetoPedido);
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => { };
    peticion.open('POST', 'http://localhost:3000/pedirPizzas', true);
    peticion.setRequestHeader('Content-Type', "application/jason;charset=UTF-8");
    peticion.send(objetoConvertidoATexto);

}
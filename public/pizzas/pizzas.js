const objetoPedido = {
    name: "ramon",
    pedido: [
        "pizza barbacoa",
        "Pizza cuatro quesos sin gluten y sin leche",
        "Pizza barbacoa"
    ]
}

const userData = {
    name: "Francisco",
    lastname: "Franco",
    username: "Caudillo",
    password: "number1",
    email: "francocaudillo@gmail.com",
}

function user() {
    const ojetoConvertidoATexto = JSON.stringify(objetoPedido);
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => {};
    peticion.open('POST', 'http://localhost:3000/user', true)

}

function pedirPizzas() {
    const ojetoConvertidoATexto = JSON.stringify(objetoPedido);
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = () => {};
    peticion.open('POST', 'http://localhost:3000/pedirPizzas', true)
    peticion.setRequestHeader("Content-Type", "application/json;charset-UTF-8");
    peticion.send(objetoConvertirTodoATexto)
}
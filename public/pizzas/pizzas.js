const objetoPedido = {
    "name" : "Ramon",
    "pedido": [
        "Pizza barbacoa",
        "pizza hawaiana",
        "pizza roquefort"
    ]
};

function pedirPizzas() {
    const objetoConvertidoATexto = JSON.stringify(objetoPedido);
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {    
            alert(request.responseText);
        };
    };
    request.open('POST', 'http://localhost:3000/pedirPizzas', true);
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8' );
    request.send(objetoConvertidoATexto);
}

const usuarios = [
    {
    name : "Pepe",
    lastName : "Garcia",
    userName : "pepgarcia08",
    password : "Lamejorpassword1234",
    email : "pepgarcia09@gmail.com"
    },
    {
    name : "Martin",
    lastName : "Gonzalez",
    userName : "magonzalez",
    password : "Gonzalez84558",
    email : "marting@gmail.com"
    }
]

function enviarUsuario() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {    
            alert(request.response);
        };
    }
    request.open('POST', 'http://localhost:3000/user', true);
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8' );
    request.send(JSON.stringify(usuarios));
}
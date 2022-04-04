const usuarios = [
    {
    name: "John",
    lastName: "Leal",
    userName: "JohnJLM",
    password: 123456,
    email: "leal98john@gmail.com"
},
{
    name: "John",
    lastName: "Leal",
    userName: "JohnJLM",
    password: 123456,
    email: "leal98john@gmail.com"
},
{
    name: "John",
    lastName: "Leal",
    userName: "JohnJLM",
    password: 123456,
    email: "leal98john@gmail.com"
},
{
    name: "Pepe",
    lastName: "Leal",
    userName: "JohnJLM",
    password: 123456,
    email: "leal98john@gmail.com"
},
{
    name: "John",
    lastName: "Leal",
    userName: "JohnJLM",
    password: 123456,
    email: "leal98john@gmail.com"
},
];

function crearUsuario(){
    const peticion = new XMLHttpRequest();
    const objetoConvertidoATexto = JSON.stringify(usuarios);

    peticion.onreadystatechange = () => {};
    peticion.open('POST', 'http://localhost:3000/user', true);
    peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    peticion.send(objetoConvertidoATexto);


}
// Objeto JSON de usuarios
// var users = {
    
//         name: 'Pepe',
//         lastname : 'Doe',
//         username : 'JoeCode',
//         password: 'admin',
//         email : 'example@example.com'

//     };

var users = [
    {
        name: 'Luns',
        lastname : 'Doe',
    },
    {
        name: 'Alfonso',
        lastname : 'Doe',
    },
    {
        name: 'Pepe',
        lastname : 'Doe',
    },
    {
        name: 'Jose',
        lastname : 'Doe',
    },
    {
        name: 'Andrew',
        lastname : 'Doe',
    },
    
];


const enviarPeticion = () => {
    const peticion = new XMLHttpRequest(); // Crear una peticion AJAX
    peticion.onreadystatechange = () => {}; // Cuando la peticion cambie de estado
    peticion.open('POST', 'http://localhost:5000/users', true); // Abrir la peticion
    
    peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Tipo de contenido
    peticion.send(JSON.stringify(users)); // Enviar el objeto JSON
    
}
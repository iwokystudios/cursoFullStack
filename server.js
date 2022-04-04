const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const port = 3000;

// post y get siempre se usan con dos parámetros:
// el primero es el PATH y el segundo es la función que resuelve la REQUEST (petición)
app.post('/product', (request, response) => {
    console.log(request.body);      // your JSON

    const pedido = request.body.usuarios;
    let contador = 0;
    pedido.map(pizza => {
        if (pizza === "Pizza barbacoa") {
            contador = contador + 1;
        }
    });
    response.send("Has pedido " + contador + " de tipo Pizza Barbacoa");   // echo the result back
});






//Método POST para los USER
app.post('/user', (request, response) => {
    console.log(request.body); //U Json
    const usuarios = request.body;
    let numObjetos = usuarios.length;
    let indexPepe = 0;
    usuarios.map((current, index) => {
        if(current.name === "Pepe"){
            indexPepe = index;
        }
    });
    response.send(`Existen ${numObjetos} y Pepe se encuentra en el index ${indexPepe}`);
});








app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/ciudades', (request, response) => {
    response.json([
        {
            name: "Barcelona", img: "barcelona.jpg"
        },
        {
            name: "Londres", img: "londres.jpg"
        },
        {
            name: "París", img: "paris.jpg"
        } 
    ]);
});


app.get('/products', (peticion, respuesta) => {
    const color = peticion.query.color;
    if (color === "rojo") {
        respuesta.send("Me pides algo rojo?");
    } else {
        respuesta.send(`<b>Estos son los productos</b> ${peticion.query.id}`)
    }
});

// Llamando a la función listen iniciamos el servidor
// El primer parámetro de la función es el PUERTO
app.listen(port, ()=> {
    console.log("SERVIDOR ONLINE")
})

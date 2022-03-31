const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const port = 3000;

// post y get siempre se usan con dos parámetros:
// el primero es el PATH y el segundo es la función que resuelve la REQUEST (petición)
app.post('/product', (request, response) => {
    console.log(request.body);      // your JSON
    response.send("");   // echo the result back
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

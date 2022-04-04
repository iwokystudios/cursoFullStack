const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
const port = 3000;

// post y get siempre se usan con dos parámetros:
// el primero es el PATH y el segundo es la función que resuelve la REQUEST (petición)
app.post('/user', (request, response) => {
  console.log(request.body);
  response.json({ msg: 'Usuario creado con éxito' });
});

// Llamando a la función listen iniciamos el servidor
// El primer parámetro de la función es el PUERTO
app.listen(port, () => {
  console.log(`Servidor del Gestor en el puerto ${port}`);
});
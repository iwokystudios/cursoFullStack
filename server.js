const express = require('express');
const app = express();
app.use (express.jason());
app.use (express.static('public'));

const port = 3000;




app.poss('/products', function(request, response){
  res.send('Hello World!')
})


app.get('/products', function(request, response){
  res.send('Hello World!')
})

app.get('/products', (peticion, respuesta) => {
    const color = peticion.query.color;
    if (color === "rojo") {
    respuesta.send("Me pides algo rojo");
    } else {
    respuesta.send('<b>Estos con los productos</b> ${peticion.query.id}')
  }
})

//LLamando a la funcion listen iniciamos el servidor
// El primer parametro de la funcion

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
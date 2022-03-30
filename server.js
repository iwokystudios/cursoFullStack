const express = require('express')
const app = express()
const port = 3000;

app.get('/products', (peticion, respuesta) => {
  const color=req.query.color;
  if (color=== "rojo") {
      respuesta.send("me pides algo rojo?");
  }else{
      respuesta.send(`<b>Estos son los productos</b>${peticion.query}`)
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
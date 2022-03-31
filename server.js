const express = require('express');
const app = express();
const port = 3000;

app.post('/product', (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

app.get('/ciudades', (req, res) => {
  res.send('Hello World!')
});

app.get('/', (req, res) => {  //  "get" Servicio de consulta. Las peticiones web solo pueden recibir Query params
    const color = req.query.color;
    if (color === "rojo") {
        res.send("Me pides algo rojo?");
    }else {
        res.send(`Estos son los productos ${peticion.query.id}`)
    }
    res.send('estos son los productos')
  });
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
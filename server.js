const express = require('express')
const app = express(); 
app.use (express.jason());
app.use (express.static("public")); 

const port = 3000;

app.post ('product', (request,response) => {
    console.log (request.body);
    
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/product', (peticion, respuesta) => { 
    const color = req.query.color; 
    if (color == "rojo") { 
        res.send("Me pides algo rojo?");
    }else{
        res.send('Estos son los productos! ${peticion.query.id}')
    }
     
    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

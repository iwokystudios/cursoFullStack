const express = require('express'); // import express
const app = express(); // create express app
app.use(express.json()); // utilizaremos json
app.use(express.static('public')); // utilizaremos la carpeta public para poder acceder a los archivos estaticos


/*
app.post('/users', (req, res) => { // crear una ruta para el metodo post
  const recibido = req.body.name; // recibir el objeto JSON

  if(recibido === "Pepe"){
      res.send("Ni de coña");
  }
  else{
      res.send("User created");
  }

});
*/

app.post('/users', (req, res) => {
    const recibido = req.body;
    
    recibido.map((content, index) =>{

        if(content.name === "Pepe"){
            res.send(console.log("Se ha encontrado a Pepe"));
        }


        res.send(console.log(index, content));
        
    });


});



// puerto de escucha de la aplicacion
app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});

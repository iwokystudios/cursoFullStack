
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const port = 3000;

app.post('/product', (request, response) => {
    console.log(request.body);      // your JSON
     response.send(request.body);    // echo the result back
  });

app.get('/ciudades', (req, res) => {
  res.json[
    {
        name: "Barcelona", img: "barcelona.jpg"
    },
    {
        name: "Londres", img: "londres.jpg"
    },
    {
        name: "París", img: "paris.jpg"
    } 
];

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

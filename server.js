const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const port = 3000;



app.post('/products', (req, res) => {
    console.log(req.body); // your JSON
    res.send(req.body); // echo the result back
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/ciudades', (req, res) => {
    res.json([
        {name: "Valencia", img: "https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389__480.jpg"},
        {name: "Barcelona", img: "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/spain/barcelona/destinations-barcelona-banner-mobile-1024x553.jpg"},
        {name: "Madrid", img: "https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg"},
        {name: "Malaga", img: "https://cdn.getyourguide.com/img/location/540dc85da2a04-m1409276338.jpg/88.jpg"},
        {name: "Sevilla", img: "https://cdn.getyourguide.com/img/location/60f92d28ea4a1.jpeg/88.jpg"},
        {name: "Toledo", img: "https://image.ondacero.es/clipping/cmsimages02/2021/04/20/2B121D9F-05EA-413F-A4B7-14190FD713CF/69.jpg?crop=669,376,x0,y36&width=1280&height=720&optimize=low"}
    ]);
});

app.get('/products', (req, res) => {
    const color = req.query.color;
    if (color === "rojo") {
        res.send("Me pides algo rojo?");
    } else {
        res.send(`<b>Estos son los productos</br> ${req.query.id}`)
    }
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

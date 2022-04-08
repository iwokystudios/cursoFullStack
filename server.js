const express = require('express');
const app = express();
var cors = require('cors');
const { json } = require('express');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

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


app.post('/pedirPizzas', (req, res) => {
    const pedido = req.body.pedido;
    let contador = 0;
    pedido.map(pizza => {
      if (pizza === "Pizza barbacoa") {
        contador++;
      }
    });
    res.send(`Haz pedido ${contador} de tipo Pizza Barbacoa`)

});

app.post('/user', (req, res) => {
  const users = req.body;
  users.map((user) => {
    if (user.name === "Pepe") {
      res.send(`
      Ni de coña, ${user.name} cambiate el nombre
      ${user}
      `);
    } else {
      res.send("Usuario creado con exito");
    }

  });
});

/* <------------ HEROES ---------------> */

app.get('/heroes', (req, res) => {
  res.json(HEROES);
});
/* -- Display One Heroe -- */
app.get('/heroes/:id', (req, res) => {
  let id = req.params.id;
  let heroSelected = HEROES.find(hero => hero.id == id);
  res.json(heroSelected);
})
/* -- Update Heroe -- */
app.put('/heroes', (req, res) => {
  let idHero = req.body.id;
  let nameHero = req.body.name;

  let heroUpdated = () => HEROES.map((current) => {
    if (current.id === idHero) {
      current.name = nameHero;
    }
  });
  heroUpdated();
  res.json(HEROES.filter(hero => hero.id === idHero));
})
/* -- Create new Heroe -- */
app.post('/heroes', (req, res) => {
  HEROES.filter(h => h.id != req.body.id) ? HEROES.push(req.body) : new Error;
  console.log(HEROES)
  res.json(HEROES[HEROES.length-1]);
})
/* -- Delete Heroe -- */
app.delete('/heroes/:id', (req, res) => {
  var heroDeleted = {};
  HEROES.map((hero, index) => {
    if (hero.id === req.params.id) {
      console.log(hero);
      heroDeleted = hero;
      HEROES.splice(index, 1);      
    }
  });
  res.json(heroDeleted);
  res.json(HEROES);
})
/* -- Search Heroe -- */
app.get('/heroes/?=name=:term', (req, res) => {
  let HEROES.filter(h => h.indexOf())
})

const HEROES = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

/* <------------ CITIES ---------------> */

app.get('/cities', (req,res) => {
  res.json(CITIES);
})

const CITIES = [
  {
      name : 'Valencia',
      nights : 7,
      rate : 9.6,
      rateWord : 'Excelente',
      oldPrice : 950,
      price : 902,
      img : 'https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389__480.jpg',
      reviews : 1025
  },
  {
      name : 'Barcelona',
      nights : 5,
      rate : 8.8,
      rateWord : 'Muy bueno',
      oldPrice : 755,
      price : 699,
      img : 'https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/spain/barcelona/destinations-barcelona-banner-mobile-1024x553.jpg',
      reviews : 403
  },
  {
      name : 'Madrid',
      nights : 9,
      rate : 6.3,
      rateWord : 'Aceptable',
      oldPrice : 1200,
      price : 1059,
      img : 'https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg',
      reviews : 258
  },
  {
      name : 'Malaga',
      nights : 15,
      rate : 7.5,
      rateWord : 'Buena opción',
      oldPrice : 1689,
      price : 1409,
      img : 'https://cdn.getyourguide.com/img/location/540dc85da2a04-m1409276338.jpg/88.jpg',
      reviews : 764
  },
  {
      name : 'Sevilla',
      nights : 2,
      rate : 9.2,
      rateWord : 'Muy bueno',
      oldPrice : 230,
      price : 198,
      img : 'https://cdn.getyourguide.com/img/location/60f92d28ea4a1.jpeg/88.jpg',
      reviews : 52
  },
  {
      name : 'Toledo',
      nights : 6,
      rate : 8.1,
      rateWord : 'Buena experiencia',
      oldPrice : 486,
      price : 411,
      img : 'https://image.ondacero.es/clipping/cmsimages02/2021/04/20/2B121D9F-05EA-413F-A4B7-14190FD713CF/69.jpg?crop=669,376,x0,y36&width=1280&height=720&optimize=low',
      reviews : 165
  }
];


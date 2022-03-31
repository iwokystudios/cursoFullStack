const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.post('/products', function(request, response) {
    console.log(request.body); // your JSON
    response.send(request.body); // echo the result back
});

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.get('/products', (req, res) => {
            const color = req.query.color;
            if (color === "rojo") {
                res.send("Me pides algo rojo?");
            } else {
                res.send(`Estos son los productosn ${req.query.id`)
    }
});

app.listen(port, () => {
    console.log( `Example app listening on port ${port}`)
});
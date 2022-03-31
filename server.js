const express = require('express')
const app = express()
const port = 3000

app.post('/products', (req, res) => {

})

app.get('/products', (req, res) => {
    const color = req.query.color;

    if (color === "rojo") {
        res.send(`¿Me pides algo ${req.query.color}?`)
    } else {
        res.send(`Estos son los productos ${req.query.id}`)
    }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
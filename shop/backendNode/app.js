const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'shop'
  });

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.set('port', process.env.PORT || 4000 );

app.get('/products', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
})

app.get('/users', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
})

app.post('/product', (req, res) => {
    connection.connect();
    const query = connection.query('INSERT INTO product set ?',  req.body, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
    connection.end();
});

app.listen(app.get('port'), () => {
    console.log(`Servidor ON`);
  });



module.exports = app;

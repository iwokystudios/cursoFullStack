const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.set('port', process.env.PORT || 4000 );


app.use("/api/albums", require('./routes/albums.routes'));
app.use("/api/artists", require('./routes/artists.routes'));
app.use("/api/genres", require('./routes/genres.routes'));
app.use("/api/playlists", require('./routes/playlists.routes'));
app.use("/api/songs", require('./routes/songs.routes'));
app.use("/api/users", require('./routes/users.routes'));
app.use("/api/collections", require('./routes/collections.routes'));



// app.get('/products', (req, res) => {
//     connection.connect();
//     connection.query('SELECT * FROM product', function (error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//     });
//     connection.end();
// })

// app.get('/users', (req, res) => {
//     connection.connect();
//     connection.query('SELECT * FROM user', function (error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//     });
//     connection.end();
// })

// app.post('/product', (req, res) => {
//     connection.connect();
//     const query = connection.query('INSERT INTO product set ?',  req.body, function (error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//     });
//     connection.end();
// });

app.listen(app.get('port'), () => {
    console.log(`Servidor ON`);
  });



module.exports = app;

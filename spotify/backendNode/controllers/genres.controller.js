const connection = require('../config');

const genresCtrl = {};

genresCtrl.getGenres = (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM genre', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
    connection.end();
}
genresCtrl.createGenre = (req, res) => {
    // create
}
genresCtrl.getGenre = (req, res) => {
    // indicar id
}
genresCtrl.editGenre = (req, res) => {
    // indicar id
}
genresCtrl.deleteGenre = (req, res) => {
    // indicar id
}


module.exports = genresCtrl;
const connection = require('../config');

const genresCtrl = {};

genresCtrl.getGenres = (req, res) => {
    connection.query('SELECT * FROM genre', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
}
genresCtrl.createGenre = (req, res) => {
    // create
}
genresCtrl.getGenre = (req, res) => {
    // indicar id
    connection.query('SELECT * FROM genre where id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}
genresCtrl.editGenre = (req, res) => {
    // indicar id
}
genresCtrl.deleteGenre = (req, res) => {
    // indicar id
}


module.exports = genresCtrl;
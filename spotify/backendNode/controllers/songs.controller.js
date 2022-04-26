const connection = require('../config');

const songsCtrl = {};

songsCtrl.getSongs = (req, res) => {
    connection.query('SELECT * FROM song', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
}
songsCtrl.createSong = (req, res) => {
    // indica artista y album
}
songsCtrl.getSong = (req, res) => {
    // indicar id
    connection.query('SELECT * FROM song where id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}
songsCtrl.editSong = (req, res) => {
        // indicar id
}
songsCtrl.deleteSong = (req, res) => {
        // indicar id
}


module.exports = songsCtrl;
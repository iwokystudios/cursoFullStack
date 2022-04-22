const connection = require('../config');

const songsCtrl = {};

songsCtrl.getSongs = (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM song', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
    connection.end();
}
songsCtrl.createSong = (req, res) => {
    // indica artista y album
}
songsCtrl.getSong = (req, res) => {
    // indicar id
}
songsCtrl.editSong = (req, res) => {
        // indicar id
}
songsCtrl.deleteSong = (req, res) => {
        // indicar id
}


module.exports = songsCtrl;
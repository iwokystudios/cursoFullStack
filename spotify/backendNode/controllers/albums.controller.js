const connection = require('../config');

const albumsCtrl = {};

albumsCtrl.getAlbums = (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM album', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
    connection.end();
}
albumsCtrl.createAlbum = (req, res) => {
    // indicar artist & genre
}
albumsCtrl.getAlbum = (req, res) => {
    // indicar id
}
albumsCtrl.editAlbum = (req, res) => {
    // indicar id
}
albumsCtrl.deleteAlbum = (req, res) => {
    // indicar id
}


module.exports = albumsCtrl;
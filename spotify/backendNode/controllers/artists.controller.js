const connection = require('../config');

const artistsCtrl = {};

artistsCtrl.getArtists = (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM artist', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
    connection.end();
}
artistsCtrl.createArtist = (req, res) => {
    // create
}
artistsCtrl.getArtist = (req, res) => {
    // indicar id
}
artistsCtrl.editArtist = (req, res) => {
    // indicar id
}
artistsCtrl.deleteArtist = (req, res) => {
    // indicar id
}


module.exports = artistsCtrl;
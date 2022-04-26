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
    connection.query('SELECT * FROM artist where id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}

artistsCtrl.getArtistSongs = (req, res) => {
    // indicar id
    connection.query('SELECT * FROM song where artist_id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}

artistsCtrl.getArtistAlbums = (req, res) => {
    // indicar id
    connection.query('SELECT * FROM album where artist_id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}

artistsCtrl.editArtist = (req, res) => {
    // indicar id
}
artistsCtrl.deleteArtist = (req, res) => {
    // indicar id
}


module.exports = artistsCtrl;
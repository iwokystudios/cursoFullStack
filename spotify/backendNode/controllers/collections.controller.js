const connection = require('../config');

const collectionsCtrl = {};

collectionsCtrl.getCollections = (req, res) => {
    connection.query('SELECT * FROM collection', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
}
collectionsCtrl.createCollection = (req, res) => {
    // create
}
collectionsCtrl.getCollection = (req, res) => {
    // indicar id
    connection.query('SELECT * FROM collection where id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}

collectionsCtrl.getCollectionPlaylists = (req, res) => {
    // indicar id
    connection.query(
        // SELECT * FROM collection where id=?;
        'SELECT * FROM playlist INNER JOIN collection_playlist ON collection_playlist.id_playlist = playlist.id WHERE collection_playlist.id_collection=?',
        [req.params.id],
        function (error, results, fields) {
            if (error) {
            res.json(error);
            }
            res.json(results);
        });
}

collectionsCtrl.editCollection = (req, res) => {
    // indicar id
}
collectionsCtrl.deleteCollection = (req, res) => {
    // indicar id
}


module.exports = collectionsCtrl;
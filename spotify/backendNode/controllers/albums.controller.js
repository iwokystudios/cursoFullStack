const connection = require('../config');

const albumsCtrl = {};

albumsCtrl.getAlbums = (req, res) => {
    // function insertCategory(connection) {
    //     conn = connection;
    //     conn.query('SELECT * FROM album', onInsertCategory);
    // }
    // function onInsertCategory(err, result) {
    //     res.json({ err, result});
    //     conn.release();
    // }
    // db.onConnect(res, insertCategory);
    connection.query('SELECT * FROM album', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
}


// function post(req, res) {
//     function insertCategory(connection) {
//         conn = connection;
//         conn.query(SQL_ADD_CATEGORY, [0, req.body.parent, req.body.es, req.body.en], onInsertCategory);
//     }
//     function onInsertCategory(err, result) {
//         res.json({ err, result});
//         conn.release();
//     }
//     db.onConnect(res, insertCategory);
// }





albumsCtrl.createAlbum = (req, res) => {
    // indicar artist & genre
}
albumsCtrl.getAlbum = (req, res) => {
    connection.query('SELECT * FROM album where id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
};
albumsCtrl.getAlbumSongs = (req, res) => {
    connection.query('SELECT * FROM song where album_id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
};
albumsCtrl.editAlbum = (req, res) => {
    // indicar id
}
albumsCtrl.deleteAlbum = (req, res) => {
    // indicar id
}


module.exports = albumsCtrl;
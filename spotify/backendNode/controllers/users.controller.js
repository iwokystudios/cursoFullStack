const connection = require('../config');

const usersCtrl = {};

usersCtrl.getUsers = (req, res) => {
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
}
usersCtrl.createUser = (req, res) => {
    // crear
}
usersCtrl.getUser = (req, res) => {
        // indicar id
        connection.query('SELECT * FROM user where id=?', [req.params.id], function (error, results, fields) {
            if (error) {
              res.json(error);
            }
            res.json(results);
          });
}

usersCtrl.getUserPlaylists = (req, res) => {
    // indicar id
    connection.query(
        'SELECT * FROM playlist INNER JOIN playlist_follower ON playlist_follower. = playlist.id WHERE collection_playlist.id_collection=?',
        [req.params.id],
        function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}

usersCtrl.editUser = (req, res) => {
        // indicar id
}
usersCtrl.deleteUser = (req, res) => {
        // indicar id
}


module.exports = usersCtrl;
const connection = require('../config');

const playlistsCtrl = {};

playlistsCtrl.getPlaylists = (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM playlist', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
    connection.end();
}
playlistsCtrl.createPlaylist = (req, res) => {
    // indicar playlist owner & songs id
}
playlistsCtrl.getPlaylist = (req, res) => {}
playlistsCtrl.editPlaylist = (req, res) => {}
playlistsCtrl.deletePlaylist = (req, res) => {}


module.exports = playlistsCtrl;
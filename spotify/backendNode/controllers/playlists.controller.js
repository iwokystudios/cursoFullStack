const connection = require('../config');

const playlistsCtrl = {};

playlistsCtrl.getPlaylists = (req, res) => {
    connection.query('SELECT * FROM playlist', function (error, results, fields) {
        if (error) res.send(error);
        res.json(results);
    });
}
playlistsCtrl.createPlaylist = (req, res) => {
    // indicar playlist owner & songs id
}
playlistsCtrl.getPlaylist = (req, res) => {
    connection.query('SELECT * FROM playlist where id=?', [req.params.id], function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}

playlistsCtrl.getPlaylistSongs = (req, res) => {
    connection.query(
        'SELECT * FROM playlist where id=?;SELECT * FROM song INNER JOIN playlist_song ON playlist_song.id_song = song.id WHERE playlist_song.id_playlist=?',
        [req.params.id, req.params.id],
        function (error, results, fields) {
        if (error) {
          res.json(error);
        }
        res.json(results);
      });
}


playlistsCtrl.editPlaylist = (req, res) => {}
playlistsCtrl.deletePlaylist = (req, res) => {}


module.exports = playlistsCtrl;
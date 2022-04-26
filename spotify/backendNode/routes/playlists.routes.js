const { Router } = require('express')
const router = Router()

const playlistsCtrl = require('../controllers/playlists.controller')


router.get('/', playlistsCtrl.getPlaylists);
router.post('/', playlistsCtrl.createPlaylist);
router.get('/:id', playlistsCtrl.getPlaylist);
router.get('/:id/songs', playlistsCtrl.getPlaylistSongs);
router.put('/:id', playlistsCtrl.editPlaylist);
router.delete('/:id', playlistsCtrl.deletePlaylist);

module.exports = router
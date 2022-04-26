const { Router } = require('express')
const router = Router()

const albumsCtrl = require('../controllers/albums.controller')


router.get('/', albumsCtrl.getAlbums);
router.post('/', albumsCtrl.createAlbum);
router.get('/:id', albumsCtrl.getAlbum);
router.get('/:id/songs', albumsCtrl.getAlbumSongs);
router.put('/:id', albumsCtrl.editAlbum);
router.delete('/:id', albumsCtrl.deleteAlbum);

module.exports = router
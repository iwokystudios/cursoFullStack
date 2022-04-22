const { Router } = require('express')
const router = Router()

const artistsCtrl = require('../controllers/artists.controller')


router.get('/', artistsCtrl.getArtists);
router.post('/', artistsCtrl.createArtist);
router.get('/:id', artistsCtrl.getArtist);
router.put('/:id', artistsCtrl.editArtist);
router.delete('/:id', artistsCtrl.deleteArtist);

module.exports = router
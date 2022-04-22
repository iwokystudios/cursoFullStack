const { Router } = require('express')
const router = Router()

const songsCtrl = require('../controllers/songs.controller')


router.get('/', songsCtrl.getSongs);
router.post('/', songsCtrl.createSong);
router.get('/:id', songsCtrl.getSong);
router.put('/:id', songsCtrl.editSong);
router.delete('/:id', songsCtrl.deleteSong);

module.exports = router
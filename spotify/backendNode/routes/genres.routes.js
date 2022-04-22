const { Router } = require('express')
const router = Router()

const genresCtrl = require('../controllers/genres.controller')


router.get('/', genresCtrl.getGenres);
router.post('/', genresCtrl.createGenre);
router.get('/:id', genresCtrl.getGenre);
router.put('/:id', genresCtrl.editGenre);
router.delete('/:id', genresCtrl.deleteGenre);

module.exports = router
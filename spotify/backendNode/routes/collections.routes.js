const { Router } = require('express')
const router = Router()

const collectionsCtrl = require('../controllers/collections.controller')


router.get('/', collectionsCtrl.getCollections);
router.post('/', collectionsCtrl.createCollection);
router.get('/:id', collectionsCtrl.getCollection);
router.get('/:id/playlists', collectionsCtrl.getCollectionPlaylists);
router.put('/:id', collectionsCtrl.editCollection);
router.delete('/:id', collectionsCtrl.deleteCollection);

module.exports = router
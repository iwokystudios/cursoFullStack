const { Router } = require('express')
const router = Router()

const usersCtrl = require('../controllers/users.controller')


router.get('/', usersCtrl.getUsers);
router.post('/', usersCtrl.createUser);
router.get('/:id', usersCtrl.getUser);
router.get('/:id/playlists', usersCtrl.getUserPlaylists);
router.put('/:id', usersCtrl.editUser);
router.delete('/:id', usersCtrl.deleteUser);

module.exports = router
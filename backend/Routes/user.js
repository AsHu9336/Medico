const express = require('express')
const { updateUser, deleteUser , getallUser , getUserById } = require('../Controllers/userController')

const router = express.Router();


router.get('/', getallUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router
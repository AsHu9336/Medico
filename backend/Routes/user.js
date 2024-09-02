const express = require('express')
const { updateUser, deleteUser , getallUser , getUserById } = require('../Controllers/userController')

const router = express.Router();
const {authMiddleware } = require('../auth/verifyToken')


router.get('/', getallUser);
router.get('/:id', authMiddleware ,getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router
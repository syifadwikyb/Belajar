const express = require('express');
const userController = require('../controllers/users_controller.js');

const router = express.Router();

// READ
router.get('/', userController.readAllUsers);

// CREATE
router.post('/', userController.createNewUser)

// UPDATE
router.patch('/:idUser', userController.updateUser)

// DELETE
router.delete('/:idUser', userController.deleteUser)

module.exports = router;
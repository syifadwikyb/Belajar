const express = require('express');
const router = express.Router();
const userController = require("../controllers/users");

router.post('/', userController.createUsers)
router.get('/', userController.getAllUsers);
router.patch('/:idUsers', userController.updateUsers)
router.delete('/:idUsers', userController.deleteUsers)

module.exports = router;
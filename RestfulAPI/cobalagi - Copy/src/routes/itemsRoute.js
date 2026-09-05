const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemsController');
const verifyFirebaseToken = require('../middleware/auth');

router.post('/', verifyFirebaseToken, itemController.create);
router.get('/', verifyFirebaseToken, itemController.getAll);
router.get('/:id', verifyFirebaseToken, itemController.getById);
router.put('/:id', verifyFirebaseToken, itemController.update);
router.delete('/:id', verifyFirebaseToken, itemController.delete);

module.exports = router;
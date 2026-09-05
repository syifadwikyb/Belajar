// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const verifyFirebaseToken = require('../middleware/auth');

router.get('/profile', verifyFirebaseToken, userController.getProfile);
router.put('/profile', verifyFirebaseToken, userController.updateProfile);
router.delete('/profile', verifyFirebaseToken, userController.deleteProfile);

module.exports = router;
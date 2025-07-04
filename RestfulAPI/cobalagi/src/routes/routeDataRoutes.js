// routes/routeDataRoutes.js
const express = require('express');
const router = express.Router();
const routeDataController = require('../controllers/routeDataController');
const verifyFirebaseToken = require('../middleware/auth'); // Untuk endpoint yang dilindungi

// GET semua rute (biasanya publik agar peta bisa memuatnya)
router.get('/', routeDataController.getAllRoutes);
// GET rute berdasarkan ID (biasanya publik)
router.get('/:id', routeDataController.getRouteById);

// Endpoint di bawah ini memerlukan autentikasi (misalnya, hanya admin yang bisa menambah/mengubah/menghapus rute)
router.post('/', verifyFirebaseToken, routeDataController.createRoute);
router.put('/:id', verifyFirebaseToken, routeDataController.updateRoute);
router.delete('/:id', verifyFirebaseToken, routeDataController.deleteRoute);

module.exports = router;
// routes/halteDataRoutes.js
const express = require('express');
const router = express.Router();
const halteDataController = require('../controllers/halteDataController');
const verifyFirebaseToken = require('../middleware/auth'); // Untuk endpoint yang dilindungi

// GET semua halte (biasanya publik agar peta bisa memuatnya)
router.get('/', halteDataController.getAllHaltes);
// GET halte berdasarkan ID (biasanya publik)
router.get('/:id', halteDataController.getHalteById);

// Endpoint di bawah ini memerlukan autentikasi (misalnya, hanya admin yang bisa menambah/mengubah/menghapus halte)
router.post('/', verifyFirebaseToken, halteDataController.createHalte);
router.put('/:id', verifyFirebaseToken, halteDataController.updateHalte);
router.delete('/:id', verifyFirebaseToken, halteDataController.deleteHalte);

module.exports = router;
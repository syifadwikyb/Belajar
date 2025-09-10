import express from 'express';
import * as jalurController from '../controllers/jalurController.js';

const router = express.Router();

router.post('/', jalurController.createJalur);
router.get('/', jalurController.getAllJalur);
router.get('/:id', jalurController.getJalurById);
router.put('/:id', jalurController.updateJalur);
router.delete('/:id', jalurController.deleteJalur);

// Endpoint khusus untuk menambah halte ke jalur
router.post('/:id_jalur/halte', jalurController.addHalteToJalur);

export default router;

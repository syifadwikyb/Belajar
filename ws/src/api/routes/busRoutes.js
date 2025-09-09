import express from 'express';
import {
    createBus,
    deleteBus,
    getBus,
    getBusById,
    updateBus
} from '../controllers/busController.js';

const router = express.Router();

router.post('/', createBus);       // Create
router.get('/', getBus);          // Read All
router.get('/:id', getBusById);    // Read by ID
router.put('/:id', updateBus);     // Update
router.delete('/:id', deleteBus);  // Delete

export default router;

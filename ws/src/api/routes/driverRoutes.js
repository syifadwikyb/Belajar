import express from 'express';
import {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
} from '../controllers/driverController.js';

const router = express.Router();

router.post('/', createDriver);       // Create
router.get('/', getDrivers);          // Read All
router.get('/:id', getDriverById);    // Read by ID
router.put('/:id', updateDriver);     // Update
router.delete('/:id', deleteDriver);  // Delete

export default router;

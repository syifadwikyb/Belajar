import Driver from '../models/Driver.js';

// Create Driver
export const createDriver = async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json(driver);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Drivers
export const getDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.json(drivers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Driver by ID
export const getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) return res.status(404).json({ message: 'Driver not found' });
        res.json(driver);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Driver
export const updateDriver = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) return res.status(404).json({ message: 'Driver not found' });

        await driver.update(req.body);
        res.json(driver);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Driver
export const deleteDriver = async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) return res.status(404).json({ message: 'Driver not found' });

        await driver.destroy();
        res.json({ message: 'Driver deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

import Bus from '../models/Bus.js';
import bus from "../models/Bus.js";

// Create Driver
export const createBus = async (req, res) => {
    try {
        const bus = await Bus.create(req.body);
        res.status(201).json(bus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Bus
export const getBus = async (req, res) => {
    try {
        const bus = await Bus.findAll();
        res.json(bus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Driver by ID
export const getBusById = async (req, res) => {
    try {
        const bus = await Bus.findByPk(req.params.id);
        if (!bus) return res.status(404).json({ message: 'Bus not found' });
        res.json(bus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Driver
export const updateBus = async (req, res) => {
    try {
        const bus = await Bus.findByPk(req.params.id);
        if (!bus) return res.status(404).json({ message: 'Bus not found' });

        await bus.update(req.body);
        res.json(bus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Bus
export const deleteBus = async (req, res) => {
    try {
        const bus = await Bus.findByPk(req.params.id);
        if (!bus) return res.status(404).json({ message: 'Bus not found' });

        await bus.destroy();
        res.json({ message: 'Bus deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

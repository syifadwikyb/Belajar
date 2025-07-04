const halteDataModel = require('../models/halteDataModel');

const halteDataController = {
    async createHalte(req, res) {
        const halteData = req.body; // { name: "Halte A", latitude: ..., longitude: ..., description: "..." }

        if (!halteData.name || typeof halteData.latitude !== 'number' || typeof halteData.longitude !== 'number') {
            return res.status(400).json({ message: 'Name, latitude, and longitude are required and must be numbers.' });
        }

        try {
            const newHalte = await halteDataModel.createHalte(halteData);
            res.status(201).json({ message: 'Halte created successfully!', data: newHalte });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllHaltes(req, res) {
        try {
            const haltes = await halteDataModel.getAllHaltes();
            res.status(200).json(haltes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getHalteById(req, res) {
        const halteId = req.params.id;

        try {
            const halte = await halteDataModel.getHalteById(halteId);
            if (!halte) {
                return res.status(404).json({ message: 'Halte not found.' });
            }
            res.status(200).json(halte);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateHalte(req, res) {
        const halteId = req.params.id;
        const halteData = req.body;

        if (!halteData || Object.keys(halteData).length === 0) {
            return res.status(400).json({ message: 'Request body cannot be empty.' });
        }

        try {
            const updatedHalte = await halteDataModel.updateHalte(halteId, halteData);
            res.status(200).json({ message: 'Halte updated successfully!', data: updatedHalte });
        } catch (error) {
            if (error.message.includes('not found')) {
                return res.status(404).json({ message: 'Halte not found for update.' });
            }
            res.status(500).json({ error: error.message });
        }
    },

    async deleteHalte(req, res) {
        const halteId = req.params.id;

        try {
            await halteDataModel.deleteHalte(halteId);
            res.status(200).json({ message: 'Halte deleted successfully!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = halteDataController;
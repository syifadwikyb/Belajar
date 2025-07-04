const routeDataModel = require('../models/routeDataModel');

const routeDataController = {
    async createRoute(req, res) {
        const routeData = req.body; // { name: "Rute A", coordinates: [[lat,lng], ...], description: "..." }

        if (!routeData.name || !routeData.coordinates || !Array.isArray(routeData.coordinates)) {
            return res.status(400).json({ message: 'Name and valid coordinates array are required.' });
        }

        try {
            const newRoute = await routeDataModel.createRoute(routeData);
            res.status(201).json({ message: 'Route created successfully!', data: newRoute });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllRoutes(req, res) {
        try {
            const routes = await routeDataModel.getAllRoutes();
            res.status(200).json(routes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getRouteById(req, res) {
        const routeId = req.params.id;

        try {
            const route = await routeDataModel.getRouteById(routeId);
            if (!route) {
                return res.status(404).json({ message: 'Route not found.' });
            }
            res.status(200).json(route);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateRoute(req, res) {
        const routeId = req.params.id;
        const routeData = req.body;

        if (!routeData || Object.keys(routeData).length === 0) {
            return res.status(400).json({ message: 'Request body cannot be empty.' });
        }

        try {
            const updatedRoute = await routeDataModel.updateRoute(routeId, routeData);
            res.status(200).json({ message: 'Route updated successfully!', data: updatedRoute });
        } catch (error) {
            if (error.message.includes('not found')) {
                return res.status(404).json({ message: 'Route not found for update.' });
            }
            res.status(500).json({ error: error.message });
        }
    },

    async deleteRoute(req, res) {
        const routeId = req.params.id;

        try {
            await routeDataModel.deleteRoute(routeId);
            res.status(200).json({ message: 'Route deleted successfully!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = routeDataController;
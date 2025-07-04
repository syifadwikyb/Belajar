const itemModel = require('../models/itemsModel');

const itemController = {
    async create(req, res) {
        const firebaseUid = req.user.uid;
        const itemData = req.body;

        if (!itemData.name) {
            return res.status(400).json({ message: 'Item name is required.' });
        }

        try {
            const newItem = await itemModel.createItem(firebaseUid, itemData);
            res.status(201).json({ message: 'Item created successfully!', data: newItem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAll(req, res) {
        const firebaseUid = req.user.uid;

        try {
            const items = await itemModel.getItemsByUser(firebaseUid);
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getById(req, res) {
        const firebaseUid = req.user.uid;
        const itemId = req.params.id;

        try {
            const item = await itemModel.getSingleItem(itemId, firebaseUid);
            res.status(200).json(item);
        } catch (error) {
            if (error.message.includes('not found') || error.message.includes('permission')) {
                return res.status(404).json({ message: 'Item not found or you do not have permission to access it.' });
            }
            res.status(500).json({ error: error.message });
        }
    },

    async update(req, res) {
        const firebaseUid = req.user.uid;
        const itemId = req.params.id;
        const itemData = req.body;

        try {
            const updatedItem = await itemModel.updateItem(itemId, firebaseUid, itemData);
            res.status(200).json({ message: 'Item updated successfully!', data: updatedItem });
        } catch (error) {
            if (error.message.includes('not found') || error.message.includes('permission')) {
                return res.status(404).json({ message: 'Item not found or you do not have permission to update it.' });
            }
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        const firebaseUid = req.user.uid;
        const itemId = req.params.id;

        try {
            await itemModel.deleteItem(itemId, firebaseUid);
            res.status(200).json({ message: 'Item deleted successfully!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = itemController;
import Halte from '../models/Halte.js';

export const createHalte = async (req, res) => {
    console.log("Data yang diterima controller:", req.body);
    try {
        const halte = await Halte.create(req.body);
        res.status(201).json(halte);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const getAllHalte = async (req, res) => {
    try {
        const halte = await Halte.findAll();
        res.json(halte);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const getHalteById = async (req, res) => {
    try {
        const halte = await Halte.findByPk(req.params.id);
        if (!halte) return res.status(404).json({message: 'Halte not found'});
        res.json(halte);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const updateHalte = async (req, res) => {
    try {
        const halte = await Halte.findByPk(req.params.id);
        if (!halte) return res.status(404).json({message: 'Halte not found'});
        await halte.update(req.body);
        res.json(halte);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

export const deleteHalte = async (req, res) => {
    try {
        const halte = await Halte.findByPk(req.params.id);
        if (!halte) return res.status(404).json({message: 'Halte not found'});
        await halte.destroy();
        res.json({message: 'Halte deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

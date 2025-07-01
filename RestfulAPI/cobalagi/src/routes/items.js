// routes/items.js
const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const verifyFirebaseToken = require('../middleware/auth');

// CREATE Item (Protected)
router.post('/', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;
    const { name, description } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Item name is required.' });
    }

    try {
        const { data, error } = await supabase
            .from('items') // Pastikan Anda memiliki tabel 'items' di Supabase
            .insert([
                {
                    user_id: firebaseUid, // Menghubungkan item dengan user Firebase
                    name: name,
                    description: description,
                    created_at: new Date().toISOString()
                }
            ])
            .select(); // Mengembalikan data yang baru dibuat

        if (error) throw error;
        res.status(201).json({ message: 'Item created successfully!', data: data[0] });
    } catch (error) {
        console.error('Error creating item:', error.message);
        res.status(500).json({ error: 'Failed to create item.' });
    }
});

// READ All Items for the authenticated user (Protected)
router.get('/', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;

    try {
        const { data, error } = await supabase
            .from('items')
            .select('*')
            .eq('user_id', firebaseUid); // Hanya ambil item milik user ini

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching items:', error.message);
        res.status(500).json({ error: 'Failed to fetch items.' });
    }
});

// READ Single Item by ID (Protected, pastikan user_id cocok)
router.get('/:id', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;
    const itemId = req.params.id;

    try {
        const { data, error } = await supabase
            .from('items')
            .select('*')
            .eq('id', itemId)
            .eq('user_id', firebaseUid) // Penting: pastikan item ini milik user yang sedang login
            .single();

        if (error) {
            if (error.code === 'PGRST116') { // Not found
                return res.status(404).json({ message: 'Item not found or you do not have permission to access it.' });
            }
            throw error;
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching single item:', error.message);
        res.status(500).json({ error: 'Failed to fetch item.' });
    }
});

// UPDATE Item (Protected, pastikan user_id cocok)
router.put('/:id', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;
    const itemId = req.params.id;
    const { name, description } = req.body;

    try {
        const { data, error } = await supabase
            .from('items')
            .update({ name, description, updated_at: new Date().toISOString() })
            .eq('id', itemId)
            .eq('user_id', firebaseUid) // Penting: pastikan item ini milik user yang sedang login
            .select();

        if (error) throw error;
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Item not found or you do not have permission to update it.' });
        }
        res.status(200).json({ message: 'Item updated successfully!', data: data[0] });
    } catch (error) {
        console.error('Error updating item:', error.message);
        res.status(500).json({ error: 'Failed to update item.' });
    }
});

// DELETE Item (Protected, pastikan user_id cocok)
router.delete('/:id', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;
    const itemId = req.params.id;

    try {
        const { error } = await supabase
            .from('items')
            .delete()
            .eq('id', itemId)
            .eq('user_id', firebaseUid); // Penting: pastikan item ini milik user yang sedang login

        if (error) throw error;
        // Supabase delete doesn't return data on success, check affected rows if needed
        // For simplicity, we assume success if no error
        res.status(200).json({ message: 'Item deleted successfully!' });
    } catch (error) {
        console.error('Error deleting item:', error.message);
        res.status(500).json({ error: 'Failed to delete item.' });
    }
});

module.exports = router;
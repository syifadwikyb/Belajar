// routes/user.js
const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const verifyFirebaseToken = require('../middleware/auth');

// GET User Profile (Protected)
router.get('/profile', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid; // UID dari token Firebase yang diverifikasi

    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', firebaseUid)
            .single(); // Ambil satu baris saja

        if (error) {
            if (error.code === 'PGRST116') { // Supabase error code for "not found"
                return res.status(404).json({ message: 'User profile not found.' });
            }
            throw error;
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        res.status(500).json({ error: 'Failed to fetch user profile.' });
    }
});

// UPDATE User Profile (Protected)
router.put('/profile', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;
    const { name, phone_number, address } = req.body; // Contoh data yang bisa diupdate

    try {
        const { data, error } = await supabase
            .from('profiles')
            .update({ name, phone_number, address, updated_at: new Date().toISOString() })
            .eq('id', firebaseUid)
            .select(); // Mengembalikan data yang diupdate

        if (error) throw error;
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'User profile not found for update.' });
        }

        res.status(200).json({ message: 'Profile updated successfully!', data: data[0] });
    } catch (error) {
        console.error('Error updating user profile:', error.message);
        res.status(500).json({ error: 'Failed to update user profile.' });
    }
});

// DELETE User Profile (Optional, hati-hati! Ini tidak menghapus user dari Firebase)
router.delete('/profile', verifyFirebaseToken, async (req, res) => {
    const firebaseUid = req.user.uid;

    try {
        const { error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', firebaseUid);

        if (error) throw error;

        res.status(200).json({ message: 'User profile deleted successfully from Supabase.' });
    } catch (error) {
        console.error('Error deleting user profile:', error.message);
        res.status(500).json({ error: 'Failed to delete user profile.' });
    }
});

module.exports = router;
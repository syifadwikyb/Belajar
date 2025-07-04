const userModel = require('../models/userModel');

const userController = {
    async getProfile(req, res) {
        const firebaseUid = req.user.uid;

        try {
            const profile = await userModel.getUserProfile(firebaseUid);
            res.status(200).json(profile);
        } catch (error) {
            if (error.message.includes('not found')) { // Cek pesan error dari model
                return res.status(404).json({ message: 'User profile not found.' });
            }
            res.status(500).json({ error: error.message });
        }
    },

    async updateProfile(req, res) {
        const firebaseUid = req.user.uid;
        const profileData = req.body;

        try {
            const updatedProfile = await userModel.updateUserProfile(firebaseUid, profileData);
            res.status(200).json({ message: 'Profile updated successfully!', data: updatedProfile });
        } catch (error) {
            if (error.message.includes('not found')) {
                return res.status(404).json({ message: 'User profile not found for update.' });
            }
            res.status(500).json({ error: error.message });
        }
    },

    async deleteProfile(req, res) {
        const firebaseUid = req.user.uid;

        try {
            await userModel.deleteUserProfile(firebaseUid);
            res.status(200).json({ message: 'User profile deleted successfully from Supabase.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;
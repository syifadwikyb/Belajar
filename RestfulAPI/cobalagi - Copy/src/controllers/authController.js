const authModel = require('../models/authModel');
const userModel = require('../models/userModel'); // Digunakan untuk membuat profil Supabase

const authController = {
    async register(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        try {
            const firebaseAuthData = await authModel.registerUser(email, password);
            const { idToken, refreshToken, localId: firebaseUid } = firebaseAuthData;

            // Buat profil pengguna di Supabase setelah registrasi Firebase berhasil
            const supabaseProfileResult = await userModel.createUserProfile(firebaseUid, email);

            if (!supabaseProfileResult.success && !supabaseProfileResult.message.includes('Profile already exists')) {
                return res.status(500).json({
                    message: 'User registered with Firebase, but failed to create profile in Supabase.',
                    firebaseUid,
                    idToken,
                    refreshToken,
                    supabaseError: supabaseProfileResult.error
                });
            }

            res.status(201).json({
                message: 'User registered successfully!',
                firebaseUid,
                idToken,
                refreshToken,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        try {
            const firebaseAuthData = await authModel.loginUser(email, password);
            const { idToken, refreshToken, localId: firebaseUid } = firebaseAuthData;

            // Opsional: Pastikan profil Supabase ada (jika belum ada, buat)
            await userModel.createUserProfile(firebaseUid, email); // Fungsi ini akan menangani jika sudah ada

            res.status(200).json({
                message: 'User logged in successfully!',
                firebaseUid,
                idToken,
                refreshToken,
            });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
};

module.exports = authController;
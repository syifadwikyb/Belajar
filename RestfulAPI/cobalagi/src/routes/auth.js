// routes/auth.js
const express = require('express');
const router = express.Router();
const admin = require('../config/firebase-admin');
const supabase = require('../config/supabase');
require('dotenv').config(); // Untuk mengakses FIREBASE_WEB_API_KEY
const axios = require('axios'); // Untuk membuat HTTP request ke Firebase Auth REST API

const FIREBASE_WEB_API_KEY = process.env.FIREBASE_WEB_API_KEY;

// Helper function to create user profile in Supabase
const createUserProfileInSupabase = async (firebaseUid, email) => {
    try {
        const { data, error } = await supabase
            .from('profiles') // Pastikan Anda memiliki tabel 'profiles' di Supabase
            .insert([
                {
                    id: firebaseUid, // Menggunakan Firebase UID sebagai ID di Supabase
                    email: email,
                    created_at: new Date().toISOString()
                }
            ]);

        if (error) {
            console.error('Supabase profile creation error:', error.message);
            // Jika error karena ID sudah ada (misal, user sudah terdaftar sebelumnya tapi profil belum dibuat),
            // kita bisa mengabaikannya atau log error.
            if (error.code === '23505') { // PostgreSQL unique violation code
                console.warn('Profile for this Firebase UID already exists in Supabase.');
                return { success: true, message: 'Profile already exists' };
            }
            throw error;
        }
        console.log('User profile created in Supabase:', data);
        return { success: true, data };
    } catch (error) {
        console.error('Error in createUserProfileInSupabase:', error.message);
        return { success: false, error: error.message };
    }
};

// Register Route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // 1. Register user with Firebase Authentication (using REST API)
        const firebaseRes = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`,
            {
                email,
                password,
                returnSecureToken: true,
            }
        );

        const { idToken, refreshToken, localId: firebaseUid } = firebaseRes.data;

        // 2. Create user profile in Supabase
        const supabaseProfileResult = await createUserProfileInSupabase(firebaseUid, email);
        if (!supabaseProfileResult.success) {
            // Jika gagal membuat profil di Supabase, Anda bisa memilih untuk
            // menghapus user di Firebase atau membiarkannya dan menangani secara manual.
            // Untuk contoh ini, kita biarkan saja dan kembalikan error.
            console.error('Failed to create Supabase profile after Firebase registration.');
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
        console.error('Firebase registration error:', error.response ? error.response.data : error.message);
        const errorMessage = error.response && error.response.data && error.response.data.error && error.response.data.error.message
            ? error.response.data.error.message
            : 'Failed to register user.';
        res.status(400).json({ message: errorMessage });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // 1. Login user with Firebase Authentication (using REST API)
        const firebaseRes = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_WEB_API_KEY}`,
            {
                email,
                password,
                returnSecureToken: true,
            }
        );

        const { idToken, refreshToken, localId: firebaseUid } = firebaseRes.data;

        // Opsional: Pastikan profil Supabase ada (jika belum ada, buat)
        // Ini berguna jika user register sebelum ada logika pembuatan profil Supabase
        await createUserProfileInSupabase(firebaseUid, email); // Fungsi ini akan menangani jika sudah ada

        res.status(200).json({
            message: 'User logged in successfully!',
            firebaseUid,
            idToken,
            refreshToken,
        });
    } catch (error) {
        console.error('Firebase login error:', error.response ? error.response.data : error.message);
        const errorMessage = error.response && error.response.data && error.response.data.error && error.response.data.error.message
            ? error.response.data.error.message
            : 'Failed to login user.';
        res.status(401).json({ message: errorMessage });
    }
});

module.exports = router;
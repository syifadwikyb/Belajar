require('dotenv').config();
const axios = require('axios');
const FIREBASE_WEB_API_KEY = process.env.FIREBASE_WEB_API_KEY;

const authModel = {
    async registerUser(email, password) {
        try {
            const response = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`,
                {
                    email,
                    password,
                    returnSecureToken: true,
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error in authModel.registerUser:', error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.error?.message || 'Firebase registration failed');
        }
    },

    async loginUser(email, password) {
        try {
            const response = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_WEB_API_KEY}`,
                {
                    email,
                    password,
                    returnSecureToken: true,
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error in authModel.loginUser:', error.response ? error.response.data : error.message);
            throw new Error(error.response?.data?.error?.message || 'Firebase login failed');
        }
    }
};

module.exports = authModel;
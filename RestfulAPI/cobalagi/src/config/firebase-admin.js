// config/firebase-admin.js
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // Sesuaikan path jika berbeda

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
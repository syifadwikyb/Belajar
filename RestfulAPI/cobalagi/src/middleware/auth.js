const admin = require('../config/firebase-admin');

const verifyFirebaseToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided or invalid format.' });
    }

    const idToken = authHeader.split('Bearer ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken; // Menyimpan informasi user (UID, email, dll.) di objek request
        next();
    } catch (error) {
        console.error('Error verifying Firebase ID token:', error.message);
        if (error.code === 'auth/id-token-expired') {
            return res.status(401).json({ message: 'Unauthorized: Token expired.' });
        }
        return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
    }
};

module.exports = verifyFirebaseToken;
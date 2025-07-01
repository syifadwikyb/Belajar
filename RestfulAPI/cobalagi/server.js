// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/user');
const itemRoutes = require('./src/routes/items');

// Middleware
app.use(express.json()); // Untuk parsing body request JSON

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/items', itemRoutes); // Untuk CRUD data umum

// Basic root route
app.get('/', (req, res) => {
    res.send('Welcome to the Firebase-Supabase Express API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access at http://localhost:${PORT}`);
});
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './api/routes/authRoutes.js';
import driverRoutes from './api/routes/driverRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

// Route utama
app.use('/api/auth', authRoutes);
app.use('/api/drivers', driverRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

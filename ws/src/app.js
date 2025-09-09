import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './api/routes/authRoutes.js';
import driverRoutes from './api/routes/driverRoutes.js';
import busRoutes from "./api/routes/busRoutes.js";
import { createServer } from "http";
import initSocket from './ws/socket.js';
import "./mqtt/mqttClient.js";

dotenv.config();

const app = express();
app.use(express.json());

// Route utama
app.use('/api/auth', authRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/bus', busRoutes);

// Buat HTTP server dari express
const server = createServer(app);

// Inisialisasi socket.io
initSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

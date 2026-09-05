// server.js
require('dotenv').config();
const express = require('express');
const http = require("http"); // <-- Tambahkan ini untuk Socket.IO
const socketio = require("socket.io"); // <-- Tambahkan ini untuk Socket.IO
const path = require("path"); // <-- Tambahkan ini untuk EJS/Static files

const app = express();
const server = http.createServer(app); // <-- Gunakan http.createServer dengan app Express
const io = socketio(server); // <-- Inisialisasi Socket.IO dengan server HTTP

const PORT = process.env.PORT || 3000;

// Import routes (pastikan path-nya benar sesuai struktur folder Anda)
const authRoutes = require('./src/routes/authRoute');
const userRoutes = require('./src/routes/userRoute');
const itemRoutes = require('./src/routes/itemsRoute');
const routeDataRoutes = require('./src/routes/routeDataRoutes'); // <-- Route baru
const halteDataRoutes = require('./src/routes/halteDataRoutes'); // <-- Route baru

// Middleware
app.use(express.json()); // Untuk parsing body request JSON

// EJS dan folder static (dipindahkan dari index.js)
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Memastikan public folder bisa diakses

// Routing untuk API Anda
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/routes', routeDataRoutes); // <-- Gunakan route baru
app.use('/api/haltes', halteDataRoutes); // <-- Gunakan route baru

// Routing untuk halaman utama (dipindahkan dari index.js)
app.get("/", (req, res) => {
    res.render("index");
});

// Socket.IO (dipindahkan dari index.js)
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("send-location", (data) => {
        io.emit("receiveLocation", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
        io.emit("Client disconnected", socket.id); // Mungkin Anda ingin mengirim ID client yang disconnected
        console.log("Client disconnected:", socket.id);
    });
});


// Middleware Penanganan Error Umum (pastikan ini di bagian PALING BAWAH)
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'An unexpected error occurred.',
        },
    });
});

// Start the server (menggunakan 'server' dari http.createServer, bukan app.listen)
server.listen(PORT, () => { // <-- PERUBAHAN DI SINI
    console.log(`Server running on http://localhost:${PORT}`);
});
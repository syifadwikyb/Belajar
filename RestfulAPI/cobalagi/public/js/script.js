// public/js/script.js
const socket = io();

const map = L.map("map").setView([-6.8140, 110.8520], 14); // Anda bisa mengatur view awal secara dinamis nanti

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const halteIcon = L.icon({
    iconUrl: "/images/halte.svg",
    iconSize: [32, 32],
});

const userIcon = L.icon({
    iconUrl: "/images/bus.svg",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

// --- Fungsi untuk memuat data dari API ---
async function loadMapData() {
    try {
        // Memuat data rute
        const routeResponse = await fetch("/api/routes"); // Endpoint GET semua rute
        if (!routeResponse.ok) throw new Error('Failed to fetch routes');
        const routes = await routeResponse.json();

        // Asumsi kita hanya memiliki satu rute atau ingin memuat rute pertama
        if (routes.length > 0) {
            const mainRoute = routes[0]; // Ambil rute pertama
            const routeLine = L.polyline(mainRoute.coordinates, { // Gunakan coordinates dari DB
                color: "blue",
                weight: 5,
                opacity: 0.8,
            }).addTo(map);
            map.fitBounds(routeLine.getBounds());
            console.log("Route loaded from API:", mainRoute.name);
        } else {
            console.warn("No routes found in database. Map bounds might not fit.");
            // Atur batas default jika tidak ada rute
            map.setView([-6.8140, 110.8520], 14);
        }

        // Memuat data halte
        const halteResponse = await fetch("/api/haltes"); // Endpoint GET semua halte
        if (!halteResponse.ok) throw new Error('Failed to fetch haltes');
        const haltes = await halteResponse.json();

        haltes.forEach((halte) => {
            L.marker([halte.latitude, halte.longitude], {icon: halteIcon})
                .addTo(map)
                .bindPopup(`<b>${halte.name}</b><br>${halte.description || ''}`);
        });
        console.log("Haltes loaded from API:", haltes.length);

    } catch (error) {
        console.error("Error loading map data from API:", error);
    }
}

// Panggil fungsi untuk memuat data saat script dimuat
loadMapData();


// === Lokasi Pengguna (tidak berubah) ===
const markers = {};

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const {latitude, longitude} = position.coords;
            socket.emit("send-location", {latitude, longitude});
        },
        (error) => {
            console.error("Geolocation error:", error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

// === Terima lokasi user lain (tidak berubah) ===
socket.on("receiveLocation", (data) => {
    const {id, latitude, longitude} = data;

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude], {icon: userIcon}).addTo(map);
    }
});

socket.on("Client disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import io from "socket.io-client";
import axios from "axios";
import polyline from "@mapbox/polyline";
import "leaflet/dist/leaflet.css";

// --- PENGATURAN IKON CUSTOM ---

// Ikon untuk Halte Bus
const halteIcon = L.icon({
    iconUrl: "/bus-stop.png", // Path ke gambar di folder public
    iconSize: [30, 30],       // Ukuran ikon dalam piksel [lebar, tinggi]
    iconAnchor: [15, 30],      // Titik pada ikon yang akan menunjuk ke koordinat (bawah tengah)
    popupAnchor: [0, -30]      // Titik di mana popup akan muncul relatif terhadap iconAnchor
});

// Komponen helper untuk menggeser map view ke posisi bus
function MapUpdater({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.panTo(center, { animate: true });
        }
    }, [center, map]);
    return null;
}

// Fungsi untuk menghitung bearing (rotasi)
const calculateBearing = (lat1, lon1, lat2, lon2) => {
    const toRad = (deg) => deg * Math.PI / 180;
    const toDeg = (rad) => rad * 180 / Math.PI;
    const dLon = toRad(lon2 - lon1);
    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);
    const y = Math.sin(dLon) * Math.cos(lat2Rad);
    const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) - Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
    let bearing = toDeg(Math.atan2(y, x));
    if (bearing < 0) {
        bearing += 360;
    }
    return bearing;
};


function BusMap() {
    // State untuk data dari backend
    const [jalurList, setJalurList] = useState([]);
    const [selectedJalurId, setSelectedJalurId] = useState("");
    const [selectedJalur, setSelectedJalur] = useState(null); // Detail jalur (termasuk polyline & halte)
    const [error, setError] = useState(null);

    // State untuk data bus real-time
    const [busData, setBusData] = useState({ latitude: -6.9175, longitude: 107.6191 }); // Default di Bandung
    const [rotation, setRotation] = useState(0);
    const lastPosition = useRef(null);

    // --- Efek untuk mengambil data dari backend ---
    useEffect(() => {
        // 1. Ambil daftar semua jalur untuk dropdown
        const fetchJalurList = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jalur');
                setJalurList(response.data);
            } catch (err) {
                setError('Gagal memuat daftar jalur. Pastikan backend berjalan.');
                console.error(err);
            }
        };
        fetchJalurList();
    }, []);

    useEffect(() => {
        // 2. Ambil detail jalur (termasuk halte) saat user memilih dari dropdown
        const fetchJalurDetail = async () => {
            if (!selectedJalurId) {
                setSelectedJalur(null);
                return;
            };
            try {
                const response = await axios.get(`http://localhost:5000/api/jalur/${selectedJalurId}`);
                // Decode polyline menjadi array koordinat
                const decodedPolyline = polyline.decode(response.data.rute_polyline);
                const jalurDetail = { ...response.data, decodedPolyline };
                
                // --- TAMBAHKAN BARIS INI UNTUK DEBUGGING ---
                console.log("Data Jalur yang Diterima Frontend:", jalurDetail);

                setSelectedJalur(jalurDetail);
            } catch (err) {
                setError('Gagal memuat detail jalur.');
                console.error(err);
            }
        };
        fetchJalurDetail();
    }, [selectedJalurId]);


    // --- Efek untuk koneksi Socket.IO (Real-time tracking) ---
    useEffect(() => {
        // Port 5000 adalah port backend Anda dimana socket server berjalan
        const socket = io("http://localhost:5000"); 
        socket.on("connect", () => console.log("✅ Socket terhubung ke server"));
        socket.on("bus_location", (data) => {
            const newLat = Number(data.latitude);
            const newLon = Number(data.longitude);
            if (lastPosition.current && (newLat !== lastPosition.current.latitude || newLon !== lastPosition.current.longitude)) {
                const newRotation = calculateBearing(
                    lastPosition.current.latitude, lastPosition.current.longitude,
                    newLat, newLon
                );
                setRotation(newRotation);
            }
            setBusData({
                latitude: newLat,
                longitude: newLon,
                speed: data.speed,
                bus_id: data.bus_id
            });
            lastPosition.current = { latitude: newLat, longitude: newLon };
        });
        socket.on("disconnect", () => console.log("⚠️ Socket terputus"));
        return () => socket.disconnect();
    }, []);

    // Ikon untuk Bus Real-time
    const busIcon = L.divIcon({
        className: 'custom-bus-icon',
        html: `<img src="/bus.png" style="width: 100%; height: 100%; transform: rotate(${rotation}deg);" />`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    return (
        <div>
            <div className="controls" style={{ padding: '10px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
                <h1>Peta Pelacakan Bus</h1>
                <select onChange={(e) => setSelectedJalurId(e.target.value)} value={selectedJalurId}>
                    <option value="">-- Pilih Rute Bus --</option>
                    {jalurList.map((jalur) => (
                        <option key={jalur.id_jalur} value={jalur.id_jalur}>
                            {jalur.nama_jalur} ({jalur.kode_jalur})
                        </option>
                    ))}
                </select>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>

            <MapContainer center={[busData.latitude, busData.longitude]} zoom={13} style={{ height: "calc(100vh - 80px)", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* 1. Gambar Rute Jalur Bus (Polyline) */}
                {selectedJalur && selectedJalur.decodedPolyline && (
                    <Polyline positions={selectedJalur.decodedPolyline} color="blue" />
                )}

                {/* 2. Tampilkan semua Halte di Rute tersebut dengan ikon custom */}
                {selectedJalur && selectedJalur.halte.map(halte => (
                    <Marker 
                        key={halte.id_halte} 
                        position={[halte.latitude, halte.longitude]}
                        icon={halteIcon} /* <-- GUNAKAN IKON CUSTOM DI SINI */
                    >
                        <Popup>
                            <b>Halte {halte.JalurHalte.urutan}</b><br/>
                            {halte.nama_halte}
                        </Popup>
                    </Marker>
                ))}

                {/* 3. Tampilkan Posisi Bus Real-time */}
                {busData.latitude && busData.longitude && (
                    <Marker
                        position={[busData.latitude, busData.longitude]}
                        icon={busIcon}
                    >
                        <Popup>
                            <b>Bus ID:</b> {busData.bus_id || 'N/A'} <br />
                            <b>Speed:</b> {(busData.speed || 0).toFixed(2)} km/h
                        </Popup>
                    </Marker>
                )}
                
                <MapUpdater center={busData.latitude ? [busData.latitude, busData.longitude] : null} />
            </MapContainer>
        </div>
    );
}

export default BusMap;


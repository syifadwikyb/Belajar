import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import io from "socket.io-client";
import "leaflet/dist/leaflet.css";

// Function to calculate the bearing between two points
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

// Komponen helper untuk menggeser map view
function MapUpdater({ busData }) {
    const map = useMap();
    useEffect(() => {
        if (busData.latitude && busData.longitude) {
            map.panTo([busData.latitude, busData.longitude]);
        }
    }, [busData, map]);
    return null;
}

function App() {
    const [busData, setBusData] = useState({
        bus_id: "A1",
        latitude: -6.814,
        longitude: 110.852,
        speed: 0,
    });
    const [rotation, setRotation] = useState(0);
    const lastPosition = useRef(null);

    useEffect(() => {
        const socket = io("http://localhost:3000");

        socket.on("connect", () => {
            console.log("✅ Socket connected to server");
        });

        socket.on("bus_location", (data) => {
            console.log("📡 Data lokasi bus diterima:", data);

            const newLat = Number(data.latitude);
            const newLon = Number(data.longitude);

            if (lastPosition.current) {
                // Hitung bearing jika ada posisi terakhir
                const newRotation = calculateBearing(
                    lastPosition.current.latitude,
                    lastPosition.current.longitude,
                    newLat,
                    newLon
                );
                setRotation(newRotation);
            }
            
            // Perbarui posisi dan simpan posisi terakhir
            setBusData({
                bus_id: data.bus_id || "A1",
                latitude: newLat,
                longitude: newLon,
                speed: data.speed || 0,
            });

            lastPosition.current = { latitude: newLat, longitude: newLon };
        });

        socket.on("disconnect", () => {
            console.log("⚠️ Socket disconnected");
        });

        return () => socket.disconnect();
    }, []);

    // Definisikan ikon di dalam komponen agar bisa menggunakan state rotation
    const busIcon = L.divIcon({
        className: 'custom-bus-icon',
        html: `<img src="/bus.png" style="width: 100%; height: 100%; transform: rotate(${rotation}deg);" />`,
        iconSize: [40, 40],
    });

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <MapContainer
                center={[busData.latitude, busData.longitude]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                <Marker
                    position={[busData.latitude, busData.longitude]}
                    icon={busIcon}
                >
                    <Popup>
                        <b>Bus ID:</b> {busData.bus_id} <br />
                        <b>Speed:</b> {busData.speed.toFixed(2)} km/h <br />
                        <b>Lat:</b> {busData.latitude} <br />
                        <b>Lng:</b> {busData.longitude}
                    </Popup>
                </Marker>
                <MapUpdater busData={busData} />
            </MapContainer>
        </div>
    );
}

export default App;
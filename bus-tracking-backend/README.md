
# Bus Tracking Backend (Express + Socket.IO)

Fitur utama:
- CRUD Halte, Bus, Rute
- Telemetri bus via REST (`POST /telemetry/bus/:id`) dan via WebSocket (`bus:telemetry`)
- ETA sederhana (`GET /eta?busId=&stopId=`)
- Cari halte terdekat (`GET /nearest-stop?lat=&lng=`)
- Broadcast realtime posisi bus per-rute lewat Socket.IO room (`route:{routeId}`)

## Menjalankan
```bash
npm install
npm run dev # atau npm start
```
Server: `http://localhost:3000`

## Endpoint Ringkas
- `GET /health`
- **Stops**: `GET/POST/PUT/DELETE /stops`
- **Buses**: `GET/POST/PUT/DELETE /buses`
- **Routes**: `GET/POST/PUT/DELETE /routes`
- **Nearest stop**: `GET /nearest-stop?lat=&lng=`
- **ETA**: `GET /eta?busId=&stopId=`
- **Telemetry**:
  - `POST /telemetry/bus/:id` body: `{lat, lng, speed?, occupancy?, occupancyPct?, routeId?}`
  - `GET /telemetry/bus/:id/location`
  - `GET /telemetry/bus/:id/logs`

## Socket.IO
Client join room rute:
```js
const socket = io("http://localhost:3000", { query: { routeId } });
socket.on("bus:update", ({ bus })=> console.log(bus));
socket.emit("subscribe:route", { routeId });
```

Kirim telemetri via socket:
```js
socket.emit("bus:telemetry", { busId, lat, lng, speed, occupancy, occupancyPct, routeId });
socket.on("bus:telemetry:ack", console.log);
```

## Catatan
- Penyimpanan masih in-memory agar mudah dicoba. Ganti dengan DB (MySQL/Postgres) sesuai kebutuhan.
- ETA berbasis jarak langsung / kecepatan rata-rata log terakhir.
- Tersedia seed data (3 halte, 1 rute, 1 bus).

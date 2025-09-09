import { Server } from "socket.io";

let io; // biar bisa diakses dari mqttClient

export default function initSocket(server) {
    io = new Server(server, {
        cors: { origin: "*" }  // bisa diatur asal frontend
    });

    io.on("connection", (socket) => {
        console.log("🔌 Client connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("❌ Client disconnected:", socket.id);
        });
    });
}

export function emitBusUpdate(data) {
    if (io) {
        io.emit("bus_location", data);
    }
}

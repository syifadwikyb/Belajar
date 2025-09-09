import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:5000", {
  transports: ["websocket"]
});

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("🟢 Connected:", socket.id);
    });

    socket.on("bus_location", (data) => {
      console.log("📡 Bus update:", data);
      // update state untuk gerakkan marker di map
    });

    return () => {
      socket.off("bus_location");
    };
  }, []);

  return <h1>Tracking Bus</h1>;
}

export default App;

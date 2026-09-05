import paho.mqtt.client as mqtt # Untuk koneksi MQTT
import json # Untuk format data JSON
import time # Untuk delay dan timestamp
import random # Untuk simulasi penumpang naik/turun

# ==========================================
# KONFIGURASI BROKER
# ==========================================
BROKER_HOST = "145.79.15.182"
BROKER_PORT = 1883

# ==========================================
# JALUR RUTE 
# ==========================================
ROUTE_PATH = [
    [-7.055943, 110.439227], [-7.055459, 110.439296], [-7.054730, 110.439420], 
    [-7.053682, 110.439597], [-7.053544, 110.439077], [-7.053384, 110.438696], 
    [-7.052783, 110.438406], [-7.051953, 110.438068], [-7.050915, 110.437629], 
    [-7.050915, 110.437494], [-7.050820, 110.437114], [-7.050607, 110.436277], 
    [-7.050495, 110.435827], [-7.050362, 110.435864], [-7.050405, 110.435950], 
    [-7.050639, 110.436819], [-7.050788, 110.437339], [-7.050814, 110.437548], 
    [-7.050724, 110.437720], [-7.050516, 110.437881], [-7.050224, 110.438015], 
    [-7.049974, 110.438374], [-7.049702, 110.438830], [-7.049500, 110.439141], 
    [-7.049431, 110.439237], [-7.049452, 110.439431], [-7.049495, 110.439570], 
    [-7.049585, 110.439677], [-7.049410, 110.440021], [-7.048516, 110.440299], 
    [-7.047904, 110.440503], [-7.047628, 110.440594], [-7.047803, 110.441216], 
    [-7.048064, 110.441994], [-7.048234, 110.442547], [-7.048325, 110.442665], 
    [-7.048505, 110.442702], [-7.049378, 110.442407], [-7.050442, 110.442069], 
    [-7.051554, 110.441731], [-7.052331, 110.441506], [-7.053240, 110.441275], 
    [-7.053613, 110.441109], [-7.053788, 110.440954], [-7.053810, 110.440777], 
    [-7.053794, 110.440498], [-7.053762, 110.440224], [-7.053682, 110.439688], 
    [-7.054475, 110.439543], [-7.055087, 110.439431], [-7.055799, 110.439323], 
    [-7.055948, 110.439302], [-7.056012, 110.439377], [-7.056097, 110.439827], 
    [-7.056135, 110.440192], [-7.055901, 110.440814], [-7.055480, 110.441731], 
    [-7.055156, 110.442461], [-7.054948, 110.442906], [-7.054815, 110.443013], 
    [-7.054805, 110.443131], [-7.054672, 110.443571], [-7.054076, 110.444815], 
    [-7.054166, 110.444863], [-7.054347, 110.444477], [-7.054581, 110.443962], 
    [-7.054837, 110.443399], [-7.054927, 110.443147], [-7.054991, 110.443088], 
    [-7.055039, 110.442938], [-7.055454, 110.442048], [-7.055890, 110.441136], 
    [-7.056199, 110.440417], [-7.056241, 110.440214], [-7.056214, 110.439945], 
    [-7.056108, 110.439366], [-7.056103, 110.439232], [-7.056002, 110.439146], 
    [-7.055895, 110.439227]
]

# ==========================================
# KONFIGURASI BUS
# ==========================================
BUSES = {
    1: {"index": 20, "capacity": 50, "passenger": 25, "last_change": time.time()},
    # 6: {"index": 45, "capacity": 32, "passenger": 10, "last_change": time.time()},
    # 11: {"index": 10, "capacity": 40, "passenger": 5, "last_change": time.time()}
}

# ==========================================
# KONEKSI MQTT
# ==========================================
print("Menghubungkan ke Broker...")
client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
client.connect(BROKER_HOST, BROKER_PORT, 60)
print("Terhubung! Mengirim data lokasi...")
print(f"Total Titik Rute: {len(ROUTE_PATH)} koordinat")

# ==========================================
# LOOP UTAMA
# ==========================================
try:
    while True:
        for bus_id, data in BUSES.items():
            topic = f"diptrack/tracking/bus/{bus_id}/location"

            # 1. Ambil koordinat saat ini berdasarkan index
            current_idx = data["index"]
            lat, lon = ROUTE_PATH[current_idx]

            # 2. Update Index untuk pergerakan selanjutnya
            data["index"] += 1
            if data["index"] >= len(ROUTE_PATH):
                data["index"] = 0

            # 3. Simulasi Penumpang
            current_time = time.time()
            if current_time - data["last_change"] >= random.randint(15, 30):
                change = random.choice([-1, 1])
                data["passenger"] += change
                data["passenger"] = max(0, min(data["passenger"], 10))
                data["last_change"] = current_time

            # 4. Buat Payload JSON
            payload = {
                "bus_id": bus_id,
                "latitude": lat,
                "longitude": lon,
                "speed": random.randint(25, 45),
                "passenger_count": data["passenger"]
            }

            # 5. Kirim ke Broker
            client.publish(topic, json.dumps(payload))

            # Log ke terminal
            print(f"Bus {bus_id} | {lat}, {lon} | {data['passenger']}")

        print("-" * 40)
        time.sleep(5)

except KeyboardInterrupt:
    print("\nSimulasi dihentikan.")
    client.disconnect()
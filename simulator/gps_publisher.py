import paho.mqtt.client as mqtt
import json
import time
import random

# connect ke broker HiveMQ
client = mqtt.Client()
client.connect("broker.hivemq.com", 1883, 60)

# Inisiasi posisi awal bus
current_lat = -6.814
current_lon = 110.852

# Kecepatan perubahan per langkah (simulasi pergerakan)
# Nilai yang kecil akan membuat pergerakan lebih halus
delta_lat = 0.00005
delta_lon = 0.00005

# loop simulasi GPS
while True:
    # Perbarui posisi bus secara bertahap
    current_lat += delta_lat * random.uniform(0.8, 1.2)  # Tambahkan variasi
    current_lon += delta_lon * random.uniform(0.8, 1.2)

    # Batasi area pergerakan (opsional)
    # Ini untuk memastikan bus tidak "keluar jalur" terlalu jauh
    if not -6.82 < current_lat < -6.80:
        delta_lat *= -1  # Balik arah
    if not 110.84 < current_lon < 110.86:
        delta_lon *= -1  # Balik arah

    # siapkan data
    data = {
        "bus_id": 1,
        "latitude": round(current_lat, 6),
        "longitude": round(current_lon, 6),
        "speed": random.randint(20, 60)
    }
    payload = json.dumps(data)

    # publish ke broker
    client.publish("syifa/tracking/bus/1", payload)
    print("📡 Publish:", payload)

    time.sleep(5)
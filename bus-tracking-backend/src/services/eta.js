
const { haversine } = require('../utils/geo');
const { db } = require('../store/memory');

// Simple ETA: distance / avgSpeed (m/s). If no speed -> default 8 m/s (~28.8km/h)
function estimateETASeconds(busId, stopId) {
  const bus = db.buses.find(b => b.id === busId);
  const stop = db.stops.find(s => s.id === stopId);
  if (!bus || !stop || !bus.lastLocation) return null;

  const distance = haversine(bus.lastLocation, { lat: stop.lat, lng: stop.lng });
  const logs = db.telemetry.get(bus.id) || [];
  // average last N speeds
  const N = 5;
  const speeds = logs.slice(-N).map(x => x.speed).filter(x => typeof x === 'number' && x >= 0);
  const avgSpeed = speeds.length ? (speeds.reduce((a,b)=>a+b,0)/speeds.length) : 8; // m/s
  const eta = distance / Math.max(avgSpeed, 1); // seconds
  return { seconds: Math.round(eta), meters: Math.round(distance) };
}

module.exports = { estimateETASeconds };


const { haversine } = require('../utils/geo');
const { db } = require('../store/memory');

function findNearestStop(lat, lng) {
  if (db.stops.length === 0) return null;
  const here = { lat, lng };
  let best = null;
  let bestDist = Number.POSITIVE_INFINITY;
  for (const s of db.stops) {
    const d = haversine(here, { lat: s.lat, lng: s.lng });
    if (d < bestDist) {
      best = s;
      bestDist = d;
    }
  }
  return { stop: best, distance: bestDist };
}

module.exports = { findNearestStop };

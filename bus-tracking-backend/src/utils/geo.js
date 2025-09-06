
// Haversine distance in meters
function toRad(d) { return d * Math.PI / 180; }

function haversine(a, b) {
  const R = 6371000; // meters
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat/2);
  const sinDLng = Math.sin(dLng/2);

  const h = sinDLat*sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLng*sinDLng;
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1-h));
  return R * c;
}

function bearing(a, b){
  const y = Math.sin(toRad(b.lng-a.lng)) * Math.cos(toRad(b.lat));
  const x = Math.cos(toRad(a.lat))*Math.sin(toRad(b.lat)) - Math.sin(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.cos(toRad(b.lng-a.lng));
  const brng = Math.atan2(y,x);
  return (brng*180/Math.PI + 360) % 360;
}

module.exports = { haversine, bearing };

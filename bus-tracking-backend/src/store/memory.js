
const { nanoid } = require('nanoid');

// In-memory stores
const db = {
  users: [],
  buses: [],
  stops: [],
  routes: [], // {id, name, description, stopIds: []}
  telemetry: new Map(), // busId -> [{lat, lng, speed, t}]
};

function seed(){
  // sample stops
  const s1 = { id: nanoid(), name: "Halte A", lat: -6.800, lng: 110.850 };
  const s2 = { id: nanoid(), name: "Halte B", lat: -6.805, lng: 110.860 };
  const s3 = { id: nanoid(), name: "Halte C", lat: -6.810, lng: 110.870 };
  db.stops.push(s1,s2,s3);
  const r1 = { id: nanoid(), name: "Rute 1", description: "Demo rute", stopIds: [s1.id, s2.id, s3.id] };
  db.routes.push(r1);
  const b1 = { id: nanoid(), plateNumber: "K 1234 XX", capacity: 30, isActive: true, occupancy: 10, occupancyPct: 33, status: "available", routeId: r1.id, lastLocation: null };
  db.buses.push(b1);
}

seed();

module.exports = {
  db,
};

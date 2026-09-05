
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { db } = require('../store/memory');
const { ok, bad, notFound } = require('../controllers/http');

const schema = Joi.object({
  lat: Joi.number().required(),
  lng: Joi.number().required(),
  speed: Joi.number().min(0).default(0), // m/s
  occupancy: Joi.number().integer().min(0),
  occupancyPct: Joi.number().min(0).max(100),
  routeId: Joi.string().allow(null),
});

router.post('/bus/:id', (req,res)=>{
  const bus = db.buses.find(b=>b.id===req.params.id);
  if (!bus) return notFound(res, 'Bus not found');
  const { error, value } = schema.validate(req.body);
  if (error) return bad(res, error.message);

  const t = Date.now();
  bus.lastLocation = { lat: value.lat, lng: value.lng, t };
  if (typeof value.occupancy === 'number') bus.occupancy = value.occupancy;
  if (typeof value.occupancyPct === 'number') bus.occupancyPct = value.occupancyPct;
  if (typeof value.routeId === 'string') bus.routeId = value.routeId || bus.routeId;

  bus.status = (bus.occupancyPct >= 100 || bus.occupancy >= bus.capacity) ? 'full' : 'available';

  // log
  const arr = db.telemetry.get(bus.id) || [];
  arr.push({ lat: value.lat, lng: value.lng, speed: value.speed, t });
  // cap to last 200
  if (arr.length > 200) arr.splice(0, arr.length - 200);
  db.telemetry.set(bus.id, arr);

  // broadcast
  const io = req.app.get('io');
  io.emit('bus:update', { bus });

  if (bus.routeId) {
    io.to(`route:${bus.routeId}`).emit('bus:update', { bus });
  }

  ok(res, { updated: true, bus });
});

router.get('/bus/:id/location', (req,res)=>{
  const bus = db.buses.find(b=>b.id===req.params.id);
  if (!bus) return notFound(res, 'Bus not found');
  ok(res, { lastLocation: bus.lastLocation, status: bus.status, occupancy: bus.occupancy, occupancyPct: bus.occupancyPct });
});

router.get('/bus/:id/logs', (req,res)=>{
  const logs = db.telemetry.get(req.params.id) || [];
  ok(res, logs);
});

module.exports = router;

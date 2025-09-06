
const express = require('express');
const router = express.Router();
const { ok, bad, notFound } = require('../controllers/http');
const { estimateETASeconds } = require('../services/eta');
const { db } = require('../store/memory');

router.get('/', (req,res)=>{
  const { busId, stopId } = req.query;
  if (!busId || !stopId) return bad(res, 'busId & stopId required');
  const bus = db.buses.find(b=>b.id===busId);
  const stop = db.stops.find(s=>s.id===stopId);
  if (!bus) return notFound(res, 'Bus not found');
  if (!stop) return notFound(res, 'Stop not found');
  const eta = estimateETASeconds(busId, stopId);
  ok(res, eta);
});

module.exports = router;

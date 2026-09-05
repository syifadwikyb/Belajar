
const express = require('express');
const router = express.Router();
const { ok, bad } = require('../controllers/http');
const { findNearestStop } = require('../services/nearest');

router.get('/', (req,res)=>{
  const lat = parseFloat(req.query.lat);
  const lng = parseFloat(req.query.lng);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return bad(res, 'lat & lng required');
  const result = findNearestStop(lat, lng);
  ok(res, result);
});

module.exports = router;

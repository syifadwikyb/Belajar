
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { db } = require('../store/memory');
const { ok, created, notFound, bad } = require('../controllers/http');
const { nanoid } = require('nanoid');

const busSchema = Joi.object({
  plateNumber: Joi.string().required(),
  capacity: Joi.number().integer().min(1).required(),
  isActive: Joi.boolean().default(true),
  routeId: Joi.string().allow(null),
});

router.get('/', (req,res)=> ok(res, db.buses));

router.get('/:id', (req,res)=>{
  const bus = db.buses.find(b=>b.id===req.params.id);
  if (!bus) return notFound(res, 'Bus not found');
  ok(res, bus);
});

router.post('/', (req,res)=>{
  const { error, value } = busSchema.validate(req.body);
  if (error) return bad(res, error.message);
  const bus = { id: nanoid(), occupancy: 0, occupancyPct: 0, status: 'available', lastLocation: null, ...value };
  db.buses.push(bus);
  created(res, bus);
});

router.put('/:id', (req,res)=>{
  const idx = db.buses.findIndex(b=>b.id===req.params.id);
  if (idx<0) return notFound(res, 'Bus not found');
  const { error, value } = busSchema.validate(req.body);
  if (error) return bad(res, error.message);
  db.buses[idx] = { ...db.buses[idx], ...value };
  ok(res, db.buses[idx]);
});

router.delete('/:id', (req,res)=>{
  const idx = db.buses.findIndex(b=>b.id===req.params.id);
  if (idx<0) return notFound(res, 'Bus not found');
  const [deleted] = db.buses.splice(idx,1);
  ok(res, deleted);
});

module.exports = router;

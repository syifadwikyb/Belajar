
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { db } = require('../store/memory');
const { ok, created, notFound, bad } = require('../controllers/http');
const { nanoid } = require('nanoid');

const stopSchema = Joi.object({
  name: Joi.string().min(1).required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});

router.get('/', (req,res)=> ok(res, db.stops));

router.get('/:id', (req,res)=>{
  const stop = db.stops.find(s=>s.id===req.params.id);
  if (!stop) return notFound(res, 'Stop not found');
  ok(res, stop);
});

router.post('/', (req,res)=>{
  const { error, value } = stopSchema.validate(req.body);
  if (error) return bad(res, error.message);
  const stop = { id: nanoid(), ...value };
  db.stops.push(stop);
  created(res, stop);
});

router.put('/:id', (req,res)=>{
  const idx = db.stops.findIndex(s=>s.id===req.params.id);
  if (idx<0) return notFound(res, 'Stop not found');
  const { error, value } = stopSchema.validate(req.body);
  if (error) return bad(res, error.message);
  db.stops[idx] = { ...db.stops[idx], ...value };
  ok(res, db.stops[idx]);
});

router.delete('/:id', (req,res)=>{
  const idx = db.stops.findIndex(s=>s.id===req.params.id);
  if (idx<0) return notFound(res, 'Stop not found');
  const [deleted] = db.stops.splice(idx,1);
  ok(res, deleted);
});

module.exports = router;

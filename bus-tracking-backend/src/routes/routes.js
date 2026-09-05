
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { db } = require('../store/memory');
const { ok, created, notFound, bad } = require('../controllers/http');
const { nanoid } = require('nanoid');

const routeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().allow(''),
  stopIds: Joi.array().items(Joi.string()).default([]),
});

router.get('/', (req,res)=> ok(res, db.routes));

router.get('/:id', (req,res)=>{
  const r = db.routes.find(x=>x.id===req.params.id);
  if (!r) return notFound(res, 'Route not found');
  ok(res, r);
});

router.post('/', (req,res)=>{
  const { error, value } = routeSchema.validate(req.body);
  if (error) return bad(res, error.message);
  const route = { id: nanoid(), ...value };
  db.routes.push(route);
  created(res, route);
});

router.put('/:id', (req,res)=>{
  const idx = db.routes.findIndex(x=>x.id===req.params.id);
  if (idx<0) return notFound(res, 'Route not found');
  const { error, value } = routeSchema.validate(req.body);
  if (error) return bad(res, error.message);
  db.routes[idx] = { ...db.routes[idx], ...value };
  ok(res, db.routes[idx]);
});

router.delete('/:id', (req,res)=>{
  const idx = db.routes.findIndex(x=>x.id===req.params.id);
  if (idx<0) return notFound(res, 'Route not found');
  const [deleted] = db.routes.splice(idx,1);
  ok(res, deleted);
});

module.exports = router;


const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const stops = require('./routes/stops');
const buses = require('./routes/buses');
const routes = require('./routes/routes');
const nearest = require('./routes/nearest');
const eta = require('./routes/eta');
const telemetry = require('./routes/telemetry');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req,res)=> res.json({ ok: true, status: 'healthy', time: new Date().toISOString() }));

app.use('/stops', stops);
app.use('/buses', buses);
app.use('/routes', routes);
app.use('/nearest-stop', nearest);
app.use('/eta', eta);
app.use('/telemetry', telemetry);

module.exports = app;

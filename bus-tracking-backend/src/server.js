
const http = require('http');
const app = require('./app');
const { db } = require('./store/memory');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*'} 
});
app.set('io', io);

// Socket.IO namespaces & rooms
io.on('connection', (socket)=>{
  // Optional auth: token check here if needed
  const routeId = socket.handshake.query.routeId;
  if (routeId) {
    socket.join(`route:${routeId}`);
  }

  socket.on('subscribe:route', ({ routeId })=>{
    socket.join(`route:${routeId}`);
  });
  socket.on('unsubscribe:route', ({ routeId })=>{
    socket.leave(`route:${routeId}`);
  });

  // For debugging: get current buses snapshot
  socket.on('buses:snapshot', ()=>{
    socket.emit('buses:snapshot', db.buses);
  });

  // Hardware could send telemetry via socket as well
  socket.on('bus:telemetry', ({ busId, lat, lng, speed=0, occupancy, occupancyPct, routeId })=>{
    const req = { body: { lat, lng, speed, occupancy, occupancyPct, routeId }, params: { id: busId }, app };
    // Reuse the REST handler logic
    const res = {
      status(code){ this._status = code; return this; },
      json(payload){ socket.emit('bus:telemetry:ack', payload); }
    };
    const telemetryRouter = require('./routes/telemetry');
    // call the POST handler programmatically is complex; instead mirror the logic quickly here:
    const bus = db.buses.find(b=>b.id===busId);
    if (!bus) return socket.emit('error', { error: 'Bus not found'});
    const t = Date.now();
    bus.lastLocation = { lat, lng, t };
    if (typeof occupancy === 'number') bus.occupancy = occupancy;
    if (typeof occupancyPct === 'number') bus.occupancyPct = occupancyPct;
    if (typeof routeId === 'string') bus.routeId = routeId || bus.routeId;
    bus.status = (bus.occupancyPct >= 100 || bus.occupancy >= bus.capacity) ? 'full' : 'available';
    const arr = db.telemetry.get(bus.id) || [];
    arr.push({ lat, lng, speed, t });
    if (arr.length > 200) arr.splice(0, arr.length - 200);
    db.telemetry.set(bus.id, arr);
    io.emit('bus:update', { bus });
    if (bus.routeId) io.to(`route:${bus.routeId}`).emit('bus:update', { bus });
    socket.emit('bus:telemetry:ack', { ok: true, data: { updated: true, bus } });
  });

});

server.listen(PORT, ()=>{
  console.log(`Server listening on http://localhost:${PORT}`);
});

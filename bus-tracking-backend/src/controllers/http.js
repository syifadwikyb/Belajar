
function ok(res, data){ return res.json({ ok: true, data }); }
function created(res, data){ return res.status(201).json({ ok: true, data }); }
function bad(res, msg){ return res.status(400).json({ ok: false, error: msg }); }
function notFound(res, msg){ return res.status(404).json({ ok: false, error: msg }); }

module.exports = { ok, created, bad, notFound };

const express = require('express');
const auth = require('./auth');
const verification = require('./verification');
const router = express.Router();

router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

router.get('/api/v1/rahasia', verification(2), auth.halamanrahasia)

module.exports = router;

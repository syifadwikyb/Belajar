const jwt = require("jsonwebtoken");
const config = require('../config/secret');

function verification(role) {
    return function (req, res, next) {
        var tokenWithBearer = req.headers.authorization;
        if (tokenWithBearer) {
            var token = tokenWithBearer.split(' ')[1];

            jwt.verify(token, config.secret, function (err, decoded) {
                if (err) {
                    return res.status(401).send({ auth: false, message: "Token tidak terdaftar" });
                } else {
                    const userRole = decoded.role;
                    if (Number(userRole) === Number(role)) {
                        req.auth = decoded;
                        next();
                    } else {
                        return res.status(401).send({ auth: false, message: 'Gagal mengorientasikan role anda' });
                    }
                }
            });
        } else {
            return res.status(401).send({ auth: false, message: 'Token tidak tersedia' });
        }
    }
}

module.exports = verification;

const jwt = require('jsonwebtoken');

const Authentication = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        res.status(401).json({ errMsg: 'Authentication token is required' });
        return;
    }

    jwt.verify(token, JwtKey, (err, json) => {
        if (err) {
            res.status(401).json({ errMsg: "Invalid Authentication Token" });
        } else {
            req.decodedToken = json;
            next();
        }
    });
}

module.exports = { Authentication };
const jwt = require('jsonwebtoken');
const config = require('../config/config');


exports.verifyToken = (req, res, next) => {
 const token = req.header('Authorization');
 if (!token) return res.status(401).json({ message: 'Access Denied' });


 try {
   const verified = jwt.verify(token, config.secretKey);
   req.user = verified;
   next();
 } catch (error) {
   res.status(400).json({ message: 'Invalid Token' });
 }
};
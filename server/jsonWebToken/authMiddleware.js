const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
  
    if (!authorization) return res.status(401).json({ error: 'Token Not Found' });
  
    const token = authorization.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ error: 'Invalid token' });
    }
  };
  

module.exports = authMiddleware;

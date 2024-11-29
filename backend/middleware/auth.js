// middleware/auth.js
/*good working for header import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1] || req.cookies.token;
  
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth;good working for heeader*/

/*invalid token import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1] || req.cookies.token;

  console.log('Received Token:', token);

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded); 
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Authentication Error:', error);

    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Token has expired' });
    } else if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ message: 'Token is invalid' });
    } else {
      res.status(401).json({ message: 'Authentication error' });
    }
  }
};

export default auth;in valid token */

import jwt from 'jsonwebtoken';

// Load secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided!' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('Token verification error:', err.message);
            return res.status(403).json({ message: 'Invalid Token' });
        }
        req.user = user;
        next();
    });
};

export default authenticateToken;

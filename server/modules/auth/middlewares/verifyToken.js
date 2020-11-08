import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  console.log('verifyToken(): ', req.params, req.body, req.auth);
  jwt.verify(
    req.headers['x-access-token'],
    process.env.JWT_SECRET,
    (err, decoded) => {
      if (err) {
        err.status = 401;
        return next(err);
      }
      req.auth = decoded;
      return next();
    },
  );
};

export default verifyToken;

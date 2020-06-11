import config from 'config';
import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  // check header or url parameters or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.get('JWT.SECRET'), function (err, decoded) {
      if (err) {
        console.error('verifyToken...err: ', err);
        err.status = 401;
        return next(err);
      }

      console.log('verifyToken...', decoded._doc);

      // if everything is good, save to request for use in other routes
      req.authUser = decoded._doc;
      next();
    });
  } else {
    // if there is no token
    // return an error
    const err = new Error('No token provided');
    err.status = 401;
    return next(err);
  }
}

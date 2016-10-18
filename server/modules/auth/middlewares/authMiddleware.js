'use strict';

import config from 'config';
import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  // check header for auth0 token
  var token = req.headers['auth-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(
      token,
      config.get('JWT.SECRET'),
      function (err, decoded) {
        if (err) {
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

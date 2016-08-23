'use strict';

import config from 'config';
import jwt from 'jsonwebtoken';

/**
 * verify a jwt token
 * @param req
 * @param res
 * @returns JSON
 */
export function verifyToken(req, res, next) {
  // check header for token
  var token = req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.get('JWT.SECRET'), function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.json({
      success: false,
      message: 'No token provided.',
    });
  }
}

'use strict';

import config from 'config';
import jwt from 'jsonwebtoken';

import User from '../../users/models/userSchema.js';

export function authenticateUser(req, res) {
  // find the user
  User.findOne({
    'email': req.body.email
  }, function (err, user) {
    if (err) return next(err);

    if (!user) {
      return res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else if (user) {
      // check if password matches
      if (!user.validPassword(req.body.password)) {
        return res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });
      } else {
        // if user is found and password is right
        // create a token
        const token = jwt.sign(user, config.get('JWT.SECRET'), {
          expiresIn: config.get('JWT.EXPIRES')
        });
        // return the information including token as JSON
        return res.json({
          success: true,
          message: 'Enjoy your token!',
          data: { token, role: user.role }
        });
      }
    }
  });
}

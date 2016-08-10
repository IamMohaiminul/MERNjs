import jwt from 'jsonwebtoken';
import sanitizeHtml from 'sanitize-html';

import User from '../models';

import config from '../../../../config';

/**
 * authenticate a user
 * @param req
 * @param res
 * @returns JSON
 */
export function authenticateUser(req, res) {
  // find the user
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
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
        var token = jwt.sign(user, config.JWT.SECRET, {
          expiresIn: config.JWT.EXPIRES
        });
        // return the information including token as JSON
        return res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
}

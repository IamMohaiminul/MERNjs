import express from 'express';
import jwt from 'jsonwebtoken';

import config from '../config';

import User from './users/server/models';

import users from './users/server/routes';

const apiRoutes = express.Router();

// route to api (GET http://localhost:3000/api)
apiRoutes.get('/', function(req, res, next) {
  return res.json({
    success: true,
    message: 'This is a base API GET request',
    users: {
      'get all users': 'GET http://localhost:3000/api/users',
      'create a user': 'POST http://localhost:3000/api/users',
      'get a user': 'GET http://localhost:3000/api/users/_id',
      'update a user': 'PUT http://localhost:3000/api/users/_id',
      'delete a user': 'DELETE http://localhost:3000/api/users/_id'
    }
  });
});

// route to authenticate a user (POST http://localhost:3000/api/auth)
apiRoutes.post('/auth', function(req, res) {
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
        var token = jwt.sign(user, config.secret, {
          expiresIn: '1d'
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
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
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
      message: 'No token provided.'
    });
  }
});

apiRoutes.use('/users', users);

module.exports = apiRoutes;

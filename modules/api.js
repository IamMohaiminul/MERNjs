import express from 'express';

import * as Middleware from './users/server/middlewares';

import auth from './users/server/routes/auth';
import users from './users/server/routes/users';

const apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
  return res.json({
    success: true,
    message: 'Welcome to MERNjs RESTful API services!'
  });
});

apiRoutes.use('/auth', auth);

apiRoutes.use(Middleware.verifyToken);

apiRoutes.use('/users', users);

// catch 404 and forward to error handler
apiRoutes.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = apiRoutes;

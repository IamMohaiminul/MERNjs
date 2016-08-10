import express from 'express';

import * as Middleware from './users/server/middlewares';

import auth from './users/server/routes/auth';
import users from './users/server/routes/users';

const apiRoutes = express.Router();

apiRoutes.use('/auth', auth);

apiRoutes.use(Middleware.verifyToken);

apiRoutes.use('/users', users);

module.exports = apiRoutes;

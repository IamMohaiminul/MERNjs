'use strict';

import express from 'express';

import * as UserController from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.route('/')
  // accessed at GET http://localhost:3000/users
  .get(UserController.getUsers)
  // accessed at POST http://localhost:3000/users
  .post(UserController.addUser);

userRoutes.route('/roles')
  // accessed at GET http://localhost:3000/users/roles
  .get(UserController.getRoles);

export default userRoutes;

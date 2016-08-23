'use strict';

import express from 'express';

import * as AuthController from '../controllers/auth';

const authRoutes = express.Router();

authRoutes.route('/')
  // create a user (accessed at POST http://localhost:3000/api/auth)
  .post(AuthController.authenticateUser);

export default authRoutes;

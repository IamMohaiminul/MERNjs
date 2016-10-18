'use strict';

import express from 'express';

import * as AuthController from '../controllers/authController.js';

const authRoutes = express.Router();

authRoutes.route('/')
  // accessed at POST http://localhost:3000/auth
  .post(AuthController.authenticateUser);

export default authRoutes;

'use strict';

import express from 'express';

import * as RoleController from '../controllers/roleController.js';

const roleRoutes = express.Router();

roleRoutes.route('/')
  // accessed at GET http://localhost:3000/roles
  .get(RoleController.getRoles)
  // accessed at POST http://localhost:3000/roles
  .post(RoleController.addRole);

export default roleRoutes;

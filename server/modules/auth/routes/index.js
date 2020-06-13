import express from 'express';

import * as AuthController from '../controllers/index';

const authRoutes = express.Router();

authRoutes.use(AuthController.createAdminUserIfNotExist);

authRoutes.route('/').post(AuthController.authenticateUser);

authRoutes.route('/register').post(AuthController.registerUser);

export default authRoutes;

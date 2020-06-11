import express from 'express';

import { verifyToken } from '../../auth/middlewares/verifyToken.js';
import { getAllUser, addUser, getUser } from '../controllers/index.js';

const userRoutes = express.Router();

userRoutes.route('/').get(getAllUser).post(verifyToken, addUser);

userRoutes.route('/:_id').get(getUser);

export default userRoutes;

import express from 'express';
import verifyToken from '../../auth/middlewares/verifyToken';
import { addUser, getAllUser, getUser } from '../controllers/index';

const userRoutes = express.Router();
userRoutes.use(verifyToken);
userRoutes.route('/').get(getAllUser).post(addUser);
userRoutes.route('/:_id').get(getUser);

export default userRoutes;

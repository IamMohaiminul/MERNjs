import express from 'express';
import verifyToken from '../../auth/middlewares/verifyToken';
import { addBlog, getAllBlog, getBlog } from '../controllers/index';

const blogRoutes = express.Router();
blogRoutes.route('/').get(getAllBlog).post(verifyToken, addBlog);
blogRoutes.route('/:_id').get(getBlog);

export default blogRoutes;

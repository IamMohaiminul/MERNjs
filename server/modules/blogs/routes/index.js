import express from 'express';

import { verifyToken } from '../../auth/middlewares/verifyToken.js';
import { getAllBlog, addBlog, getBlog } from '../controllers/index.js';

const blogRoutes = express.Router();

blogRoutes.route('/')
  .get(getAllBlog)
  .post(verifyToken, addBlog);

blogRoutes.route('/:_id')
  .get(getBlog);

export default blogRoutes;

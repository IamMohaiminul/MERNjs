import express from 'express';
import authRoutes from './modules/auth/routes/index';
import blogRoutes from './modules/blogs/routes/index';
import userRoutes from './modules/users/routes/index';

const router = express.Router();

/* GET MERNjs RESTful APIs */
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to MERNjs RESTful APIs.',
  });
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

export default router;

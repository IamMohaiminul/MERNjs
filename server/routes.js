import express from 'express';

import authRoutes from './modules/auth/routes/index.js';
import userRoutes from './modules/users/routes/index.js';
import blogRoutes from './modules/blogs/routes/index.js';

let router = express.Router();

/* GET MERNjs RESTful APIs */
router.get('/', function (req, res, next) {
  res.json({
    message: 'Welcome to MERNjs RESTful APIs.',
  });
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  if (req.app.get('env') === 'production') {
    res.json({
      message: err.message,
      error: {},
    });
  } else {
    res.json({
      message: err.message,
      error: err,
    });
  }
});

export default router;

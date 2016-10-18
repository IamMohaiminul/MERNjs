'use strict';

import express from 'express';

const router = express.Router();

/* GET base API */
router.get('/', function(req, res, next) {
  res.json({
    message: 'Welcome to MERNjs...'
  });
});

export default router;

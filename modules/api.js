import express from 'express';

import users from './users/server/routes';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('This is a API GET request.');
});

router.use('/users', users);

module.exports = router;

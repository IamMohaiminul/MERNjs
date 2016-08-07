import express from 'express';

import users from './users/server/routes';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    status: 200,
    message: 'This is a base API GET request',
    users: {
      'get all users': 'GET http://localhost:3000/api/users',
      'create a user': 'POST http://localhost:3000/api/users',
      'get a user': 'GET http://localhost:3000/api/users/_id',
      'update a user': 'PUT http://localhost:3000/api/users/_id',
      'delete a user': 'DELETE http://localhost:3000/api/users/_id'
    }
  });
});

router.use('/users', users);

module.exports = router;

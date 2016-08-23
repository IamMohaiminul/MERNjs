'use strict';

import express from 'express';

import * as UserController from '../controllers/users';

const apiRoutes = express.Router();

apiRoutes.route('/')  // accessed at http://localhost:3000/api/users
  .get(UserController.getUsers) // get all users (accessed at GET http://localhost:3000/api/users)
  .post(UserController.addUser);  // create a user (accessed at POST http://localhost:3000/api/users)

apiRoutes.route('/:_id')  // accessed at http://localhost:3000/api/users/_id
  .get(UserController.getUser)  // get a user (accessed at GET http://localhost:3000/api/users/_id)
  .put(UserController.updateUser) // update a user (accessed at PUT http://localhost:3000/api/users/_id)
  .delete(UserController.deleteUser); // delete a user (accessed at DELETE http://localhost:3000/api/users/_id)

export default apiRoutes;

import express from 'express';

import * as UserController from '../controllers';

const router = express.Router();

router.route('/')
  // get all users (accessed at GET http://localhost:3000/api/users)
  .get(UserController.getUsers)
  // create a user (accessed at POST http://localhost:3000/api/users)
  .post(UserController.addUser);

router.route('/:_id')
  // get a user (accessed at GET http://localhost:3000/api/users/_id)
  .get(UserController.getUser)
  // update a user (accessed at PUT http://localhost:3000/api/users/_id)
  .put(UserController.updateUser)
  // delete a user (accessed at DELETE http://localhost:3000/api/users/_id)
  .delete(UserController.deleteUser);

export default router;

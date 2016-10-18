'use strict';

import Role from '../../roles/models/roleSchema.js';
import User from '../../users/models/userSchema.js';

export function getUsers(req, res, next) {
  if (!req.authUser.role.permission.user.read) {
    const err = new Error('Unable to access this feature');
    err.status = 405;
    return next(err);
  }

  User.find({
    'status': 'Active',
    'role.hierarchy': {$gte: req.authUser.role.hierarchy}
  }).sort({
    'role.hierarchy': 1,
    'createdAt': -1
  }).exec((err, users) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get all Users',
      data: users
    });
  });
}

export function addUser(req, res, next) {
  if (!req.authUser.role.permission.user.create) {
    const err = new Error('Unable to access this feature');
    err.status = 405;
    return next(err);
  }

  Role.findById(req.body.roleId).exec((err, role) => {
    if (err) return next(err);

    const newUser = new User();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = newUser.generateHash(req.body.password);
    if (req.body.dateOfBirth) newUser.dateOfBirth = req.body.dateOfBirth;
    newUser.role = role;
    // save the newUser and check for errors
    newUser.save(function(err, user) {
      if (err) return next(err);

      return res.status(201).json({
        success: true,
        message: 'User is created successfully!',
        data: user
      });
    });
  });
}

export function getRoles(req, res, next) {
  if (!req.authUser.role.permission.user.create) {
    const err = new Error('Unable to access this feature');
    err.status = 405;
    return next(err);
  }

  Role.find({
    'status': 'Active',
    'hierarchy': {$gte: req.authUser.role.hierarchy}
  }).sort({
    'hierarchy': 1,
    'createdAt': -1
  }).exec((err, roles) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get all Role',
      data: roles
    });
  });
}

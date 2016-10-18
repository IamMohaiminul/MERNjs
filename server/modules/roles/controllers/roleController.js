'use strict';

import Role from '../models/roleSchema.js';

export function getRoles(req, res, next) {
  if (!req.authUser.role.permission.role.read) {
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

export function addRole(req, res, next) {
  if (!req.authUser.role.permission.role.create) {
    const err = new Error('Unable to access this feature');
    err.status = 405;
    return next(err);
  }

  const newRole = new Role();
  newRole.name = req.body.name;
  newRole.hierarchy = req.body.hierarchy;
  newRole.permission = req.body.permission;

  newRole.save(function(err, role) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Role is created successfully!',
      data: role
    });
  });
}

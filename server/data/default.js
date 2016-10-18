'use strict';

import Role from '../modules/roles/models/roleSchema.js';
import User from '../modules/users/models/userSchema.js';


const defaultRole = {
  'name': 'Administrator',
  'hierarchy': 1,
  'permission': {
    'role': { create: true, read: true, update: true, delete: true },
    'user': { create: true, read: true, update: true, delete: true }
  }
};

const defaultUser = {
  'name': 'Admin User',
  'email': 'admin@mail.com',
  'password': 'admin'
};

/* Methods */

function findRole(roleData, callback) {
  Role.findOne(
    roleData
  ).then((role) => {
    callback(null, role);
  }).catch((error) => {
    callback(error, null);
  });
}

function createRole(roleData, callback) {
  Role.create(
    roleData
  ).then((role) => {
    callback(null, role);
  }).catch((error) => {
    callback(error, null);
  });
}

function findUser(userData, callback) {
  User.findOne(
    userData
  ).then((user) => {
    callback(null, user);
  }).catch((error) => {
    callback(error, null);
  });
}

function createUser(userData, callback) {
  User.create(
    Object.assign({}, userData, {password: new User().generateHash(userData.password)})
  ).then((user) => {
    callback(null, user);
  }).catch((error) => {
    callback(error, null);
  });
}

/* */

findRole({
  'name': defaultRole.name,
  'hierarchy': defaultRole.hierarchy
}, function(err, role) {
  if (err) {
    console.error('Error Find Default Role...: ', err);
    return false;
  }
  if (role) {
    console.log('Find Default Role...');
    findUser({
      'email': defaultUser.email,
      'role._id': role._id
    }, function(err, user) {
      if (err) {
        console.error('Error Find Default User...: ', err);
        return false;
      }
      if (user) {
        console.log('Find Default User...');
      } else {
        console.warn('No Default User...');
        createUser(Object.assign({}, defaultUser, {role: role}), function(err, newUser) {
          if (err) {
            console.error('Error Create Default User...: ', err);
            return false;
          }
          console.log('Create Default User...');
        });
      }
    });
  } else {
    console.warn('No Default Role...');
    createRole(defaultRole, function(err, newRole) {
      if (err) {
        console.error('Error Create Default Role...: ', err);
        return false;
      }
      console.log('Create Default Role...');
      findUser({
        'email': defaultUser.email,
        'role._id': newRole._id
      }, function(err, user) {
        if (err) {
          console.error('Error Find Default User...: ', err);
          return false;
        }
        if (user) {
          console.log('Find Default User...');
        } else {
          console.warn('No Default User...');
          createUser(Object.assign({}, defaultUser, {role: newRole}), function(err, newUser) {
            if (err) {
              console.error('Error Create Default User...: ', err);
              return false;
            }
            console.log('Create Default User...');
          });
        }
      });
    });
  }
});

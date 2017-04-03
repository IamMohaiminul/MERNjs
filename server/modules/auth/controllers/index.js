import config from 'config';
import jwt from 'jsonwebtoken';

import User from '../../users/models/index.js';

export function createAdminUserIfNotExist(req, res, next) {
  User.find().exec((err, users) => {
    if (err) return next(err);
    if (users.length) {
      return next();
    } else {
      const adminUser = new User();
      Object.assign(adminUser, {
        fullName: 'Administrator',
        emailAddress: 'admin@mail.com',
        password: adminUser.generateHash('admin'),
        role: 'Administrator',
      });
      adminUser.save(function (err, admin) {
        if (err) return next(err);
        console.log('Create an admin user.');
        return next();
      });
    }
  });
}

export function authenticateUser(req, res) {
  // find the user
  User.findOne({
    emailAddress: req.body.emailAddress,
  }, function (err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed. User not found.',
      });
    } else if (user) {
      // check if password matches
      if (!user.validPassword(req.body.password)) {
        return res.status(401).json({
          success: false,
          message: 'Authentication failed. Wrong password.',
        });
      } else {
        // if user is found and password is right
        // create a token
        const token = jwt.sign(user, config.get('JWT.SECRET'), {
          expiresIn: config.get('JWT.EXPIRES'),
        });

        // return the information including token as JSON
        return res.json({
          success: true,
          message: 'Authenticated User!',
          data: { token, email: user.emailAddress },
        });
      }
    }
  });
}

export function registerUser(req, res) {
  console.log('registerUser(req.body): ', req.body);
  const newUser = new User();
  Object.assign(newUser, req.body, {
    password: newUser.generateHash(req.body.password),
  });
  console.log('registerUser(newUser): ', newUser);
  newUser.save(function (err, user) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Registered user!',
      data: user,
    });
  });

}

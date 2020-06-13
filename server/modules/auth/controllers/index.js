import jwt from 'jsonwebtoken';

import User from '../../users/models/index';

const createAdminUserIfNotExist = async (req, res, next) => {
  console.log('createAdminUserIfNotExist: ', req.body);
  try {
    const users = await User.find();
    console.log('users: ', users);
    if (users.length) return next();
    const user = new User();
    Object.assign(user, {
      fullName: 'Administrator',
      emailAddress: 'admin@mail.com',
      password: user.generateHash('admin'),
      role: 'Administrator',
    });
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
};

const authenticateUser = async (req, res, next) => {
  console.log('authenticateUser: ', req.body);
  try {
    const user = await User.findOne({
      emailAddress: req.body.emailAddress,
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed. User not found.',
      });
    }
    // check if password matches
    if (!user.validPassword(req.body.password)) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed. Wrong password.',
      });
    }
    // if user is found and password is right
    // create a token
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    // return the information including token as JSON
    return res.json({
      success: true,
      message: 'Authenticated User!',
      data: { token, email: user.emailAddress },
    });
  } catch (err) {
    return next(err);
  }
};

const registerUser = async (req, res, next) => {
  console.log('registerUser: ', req.body);
  try {
    const newUser = new User();
    Object.assign(newUser, req.body, {
      password: newUser.generateHash(req.body.password),
    });
    console.log('registerUser(newUser): ', newUser);
    const user = await newUser.save();
    return res.status(201).json({
      success: true,
      message: 'Registered user!',
      data: user,
    });
  } catch (err) {
    return next(err);
  }
};

export { createAdminUserIfNotExist, authenticateUser, registerUser };

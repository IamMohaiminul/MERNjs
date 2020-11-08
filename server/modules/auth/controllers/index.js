import jwt from 'jsonwebtoken';
import User from '../../users/models/index';

const authenticateUser = async (req, res, next) => {
  console.log('authenticateUser(): ', req.params, req.body, req.auth);
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
  console.log('registerUser(): ', req.params, req.body, req.auth);
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

export { authenticateUser, registerUser };

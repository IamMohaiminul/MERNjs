import User from '../models/index.js';

/**
 * get users
 */
export function getAllUser(req, res, next) {
  User.find({
    status: 'Active',
  }).sort({
    createdAt: -1,
  }).exec((err, users) => {
    if (err) return next(err);
    console.log('getAllUser(users): ', users);
    return res.status(200).json({
      success: true,
      message: 'Get all user',
      data: users,
    });
  });
}

/**
 * add user
 */
export function addUser(req, res, next) {
  console.log('addUser(req.body): ', req.body);
  const newUser = new User();
  Object.assign(newUser, req.body, {
    password: newUser.generateHash(req.body.password),
  });
  console.log('addUser(newUser): ', newUser);
  newUser.save(function (err, user) {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created user!',
      data: user,
    });
  });
}

/**
 * get user
 */
export function getUser(req, res, next) {
  User.findById(req.params._id).exec((err, user) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get user',
      data: user,
    });
  });
}

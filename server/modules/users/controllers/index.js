import User from '../models/index';

/**
 * get users
 */
export function getAllUser(req, res, next) {
  console.log('getAllUser(): ', req.params, req.body, req.auth);
  User.find({}, '-password')
    .sort({
      createdAt: -1,
    })
    .exec((err, users) => {
      if (err) return next(err);

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
  console.log('addUser(): ', req.params, req.body, req.auth);
  const newUser = new User();
  Object.assign(newUser, req.body, {
    password: newUser.generateHash(req.body.password),
  });
  newUser.save((err, user) => {
    if (err) return next(err);

    return res.status(201).json({
      success: true,
      message: 'Created user!',
      data: user,
    });
  });
}

/**
 * get user by id
 */
export function getUser(req, res, next) {
  console.log('getUser(): ', req.params, req.body, req.auth);
  User.findById(req.params._id, '-password').exec((err, user) => {
    if (err) return next(err);

    return res.status(200).json({
      success: true,
      message: 'Get user',
      data: user,
    });
  });
}

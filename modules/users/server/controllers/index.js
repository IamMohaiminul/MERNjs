import sanitizeHtml from 'sanitize-html';

import User from '../models';

/**
 * Get all users
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function getUsers(req, res, next) {
  User.find().sort('-createdAt').exec((err, users) => {
    if (err) {
      res.json({
        status: 500,
        message: '---',
        error: err
      });
    }
    res.json({
      status: 200,
      message: 'All Users',
      users: users
    });
  });
}

/**
 * Create a user
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function addUser(req, res, next) {
  if (!req.body.username) {
    res.json({
      status: 403,
      message: 'Username is required.'
    });
  }
  if (!req.body.password) {
    res.json({
      status: 403,
      message: 'Password is required'
    });
  }

  const newUser = new User({
    username: sanitizeHtml(req.body.username),
    password: new User().generateHash(sanitizeHtml(req.body.password))
  });

  newUser.save((err, user) => {
    if (err) {
      res.json({
        status: 500,
        message: '---',
        error: err
      });
    }
    res.json({
      status: 200,
      message: 'User created!',
      user: user
    });
  });
}

/**
 * Get a single user
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function getUser(req, res, next) {
  User.findById(req.params._id).exec((err, user) => {
    if (err) {
      res.json({
        status: 500,
        message: '---',
        error: err
      });
    }
    res.json({
      status: 200,
      message: 'Single User',
      user: user
    });
  });
}

/**
 * Update a user
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function updateUser(req, res, next) {
  User.findById(req.params._id).exec((err, user) => {
    if (err) {
      res.json({
        status: 500,
        message: '---',
        error: err
      });
    }

    if (!req.body.username) {
      res.json({
        status: 403,
        message: 'Username is required.'
      });
    }
    if (!req.body.password) {
      res.json({
        status: 403,
        message: 'Password is required'
      });
    }

    user.username = sanitizeHtml(req.body.username);
    user.password = new User().generateHash(sanitizeHtml(req.body.password));

    user.save((err, user) => {
      if (err) {
        res.json({
          status: 500,
          message: '---',
          error: err
        });
      }
      res.json({
        status: 200,
        message: 'User created!',
        user: user
      });
    });
  });
}

/**
 * Delete a user
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function deleteUser(req, res, next) {
  User.remove({ _id: req.params._id }).exec((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({
      status: 200,
      message: 'Successfully deleted!'
    });
  });
}

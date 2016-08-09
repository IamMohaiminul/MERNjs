import sanitizeHtml from 'sanitize-html';

import User from '../models';

/**
 * Get all users
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function getUsers(req, res) {
  User.find().sort('-createdAt').exec((err, users) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Unable to get all users.',
        error: err
      });
    }
    return res.json({
      success: true,
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
export function addUser(req, res) {
  if (!req.body.username) {
    return res.json({
      success: false,
      message: 'Username is required.'
    });
  }
  if (!req.body.password) {
    return res.json({
      success: false,
      message: 'Password is required'
    });
  }

  const newUser = new User({
    username: sanitizeHtml(req.body.username),
    password: new User().generateHash(sanitizeHtml(req.body.password))
  });

  newUser.save((err, user) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Unable to create a user.',
        error: err
      });
    }
    return res.json({
      success: true,
      message: 'User is created successfully!',
      user: user
    });
  });
}

/**
 * Get a user
 * @param req
 * @param res
 * @param next
 * @returns void
 */
export function getUser(req, res) {
  User.findById(req.params._id).exec((err, user) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Unable to get a user',
        error: err
      });
    }
    return res.json({
      success: true,
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
export function updateUser(req, res) {
  User.findById(req.params._id).exec((err, user) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Unable to find a user',
        error: err
      });
    }

    if (!req.body.username) {
      return res.json({
        success: false,
        message: 'Username is required.'
      });
    }
    if (!req.body.password) {
      return res.json({
        success: false,
        message: 'Password is required.'
      });
    }

    user.username = sanitizeHtml(req.body.username);
    user.password = new User().generateHash(sanitizeHtml(req.body.password));

    user.save((err, user) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Unable to update a user',
          error: err
        });
      }
      return res.json({
        success: true,
        message: 'User is updated successfully!',
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
export function deleteUser(req, res) {
  User.remove({ _id: req.params._id }).exec((err, user) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Unable to delete a user',
        error: err
      });
    }
    return res.json({
      success: true,
      message: 'User is deleted successfully!'
    });
  });
}

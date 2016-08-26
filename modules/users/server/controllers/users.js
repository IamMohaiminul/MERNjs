'use strict';

import formidable from 'formidable';
import sanitizeHtml from 'sanitize-html';
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import Chance from 'chance';
import config from 'config';
import _ from 'lodash';

import User from '../models';

AWS.config.update({
    accessKeyId: config.get('S3.ACCESS_KEY_ID'),
    secretAccessKey: config.get('S3.SECRET_ACCESS_KEY')
});

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
      return res.status(404).json({
        success: false,
        message: 'Unable to get all users.',
        error: err
      });
    }
    return res.status(200).json({
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
  const form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    // console.warn('err: ', err);
    // console.log('fields: ', fields);
    // console.log('files: ', files);

    if (!fields.username) {
      return res.json({
        success: false,
        message: 'Username is required.'
      });
    }
    if (!fields.password) {
      return res.json({
        success: false,
        message: 'Password is required'
      });
    }

    let newUser = new User({
      username: sanitizeHtml(fields.username),
      password: new User().generateHash(sanitizeHtml(fields.password))
    });

    if (!_.isEmpty(files)) {
      const file = files.file;
      fs.readFile(file.path, function (err, data) {
        if (err) throw err; // Something went wrong!
        const s3bucket = new AWS.S3({ params: { Bucket: config.get('S3.BUCKET') } });
        s3bucket.createBucket(function () {
          var params = {
            Key: new Chance().guid() + path.extname(file.name),
            Body: data
          };
          s3bucket.upload(params, function (err, data) {
            // Whether there is an error or not, delete the temp file
            fs.unlink(file.path, function (err) {
              if (err) {
                  console.error(err);
              }
              console.log('Temp File Delete');
            });
            console.log("PRINT FILE:", file);
            if (err) {
              console.error('ERROR MSG: ', err.message, err);
              return res.json({
                success: false,
                message: err.message
              });
            } else {
              console.log('Successfully uploaded data', data);
              newUser.avatar = {
                name: file.name,
                key: data.Key,
                location: data.Location
              };
              newUser.save((err, user) => {
                if (err) {
                  return res.status(404).json({
                    success: false,
                    message: 'Unable to create a user.',
                    error: err
                  });
                }
                return res.status(200).json({
                  success: true,
                  message: 'User is created successfully!',
                  user: user
                });
              });
            }
          });
        });
      });
    } else {
      newUser.save((err, user) => {
        if (err) {
          return res.status(404).json({
            success: false,
            message: 'Unable to create a user.',
            error: err
          });
        }
        return res.status(200).json({
          success: true,
          message: 'User is created successfully!',
          user: user
        });
      });
    }
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
      return res.status(404).json({
        success: false,
        message: 'Unable to get a user',
        error: err
      });
    }
    return res.status(200).json({
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
      return res.status(404).json({
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
    user.password = user.generateHash(sanitizeHtml(req.body.password));

    user.save((err, user) => {
      if (err) {
        return res.status(404).json({
          success: false,
          message: 'Unable to update a user',
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        message: 'User is updated successfully!',
        user: user,
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
  User.remove({
    _id: req.params._id,
  }).exec((err, user) => {
    if (err) {
      return res.status(404).json({
        success: false,
        message: 'Unable to delete a user',
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'User is deleted successfully!',
    });
  });
}

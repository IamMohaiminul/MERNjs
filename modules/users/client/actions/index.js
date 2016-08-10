import $ from 'jquery';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

import * as AuthService from '../services/auth';

import config from '../../../../config';

/*
 * select a user
 */
export const selectUser = (user) => {
  console.log("You clicked on user: ", user);
  // check cookie token availability
  if (AuthService.isAuth()) {
    return {
      type: 'USER_SELECTED',
      payload: user
    }
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/auth');
  }
};

/*
 * create a user
 */
export const createUser = (user) => {
  console.log("You created a user: ", user);
  let payload = {};
  // check cookie token availability
  if (AuthService.isAuth()) {
    $.ajax({
      type: "POST",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", AuthService.getToken());
      },
      url: config.API_URL + 'users',
      data: user,
      success: function(data) {
        if (data.success) {
          toastr.success(data.message);
          payload = data;
        } else {
          toastr.warning(data.message);
        }
      },
      error: function (xhr, sts, err) {
        console.warn("createUser: ", xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_CREATED',
      payload: payload
    }
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/auth');
  }
};

/*
 * update a user
 */
export const updateUser = (user, _id) => {
  console.log("You updated a user: ", user);
  let payload = {};
  // check cookie token availability
  if (AuthService.isAuth()) {
    $.ajax({
      type: "PUT",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", AuthService.getToken());
      },
      url: config.API_URL + 'users/' + _id,
      data: user,
      success: function(data) {
        if (data.success) {
          toastr.success(data.message);
          payload = data;
        } else {
          toastr.warning(data.message);
        }
      },
      error: function (xhr, sts, err) {
        console.warn("updateUser: ", xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_UPDATED',
      payload: payload
    }
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/auth');
  }
};

/*
 * delete a user
 */
export const deleteUser = (_id) => {
  console.log("You deleted a user: ", _id);
  let payload = {};
  // check cookie token availability
  if (AuthService.isAuth()) {
    $.ajax({
      type: "DELETE",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", AuthService.getToken());
      },
      url: config.API_URL + 'users/' + _id,
      success: function(data) {
        if (data.success) {
          toastr.success(data.message);
          payload = data;
        } else {
          toastr.warning(data.message);
        }
      },
      error: function (xhr, sts, err) {
        console.warn("deleteUser: ", xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_DELETED',
      payload: payload
    }
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/auth');
  }
};

/*
 * authenticate a user
 */
export const authUser = (user) => {
  console.log("You authenticate with user: ", user);
  let payload = {};
  $.ajax({
    type: "POST",
    url: config.API_URL + 'auth',
    data: user,
    success: function(data) {
      if (data.success) {
        AuthService.setToken(data.token);
        toastr.success(data.message);
        payload = data;
      } else {
        toastr.warning(data.message);
      }
    },
    error: function (xhr, sts, err) {
      console.warn("authUser: ", xhr, sts, err);
    },
    async: false
  });
  return {
    type: 'USER_AUTHED',
    payload: payload
  }
};

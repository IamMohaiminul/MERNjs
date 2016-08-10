import $ from 'jquery';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
import toastr from 'toastr';

import config from '../../../../config';

/*
 * select a user
 */
export const selectUser = (user) => {
  console.log("You clicked on user: ", user);
  // check cookie token availability
  if (cookie.load('x-access-token')) {
    return {
      type: 'USER_SELECTED',
      payload: user
    }
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/users/auth');
  }
};

/*
 * create a user
 */
export const createUser = (user) => {
  console.log("You created a user: ", user);
  let payload = {};
  // check cookie token availability
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "POST",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: config.BASE_URL + 'api/users',
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
    hashHistory.push('/users/auth');
  }
};

/*
 * update a user
 */
export const updateUser = (user, _id) => {
  console.log("You updated a user: ", user);
  let payload = {};
  // check cookie token availability
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "PUT",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: config.BASE_URL + 'api/users/' + _id,
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
    hashHistory.push('/users/auth');
  }
};

/*
 * delete a user
 */
export const deleteUser = (_id) => {
  console.log("You deleted a user: ", _id);
  let payload = {};
  // check cookie token availability
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "DELETE",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: config.BASE_URL + 'api/users/' + _id,
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
    hashHistory.push('/users/auth');
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
    url: config.BASE_URL + 'api/auth',
    data: user,
    success: function(data) {
      if (data.success) {
        cookie.save('x-access-token', data.token, { expires: config.REACT_COOKIE.EXPIRES });
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

import $ from 'jquery';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
import toastr from 'toastr';

export const selectUser = (user) => {
  console.log("You clicked on user: ", user);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};

export const createUser = (user) => {
  console.log("You created a user: ", user);
  let payload = {};
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "POST",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: "http://localhost:3000/api/users",
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
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/users/auth');
  }
  return {
    type: 'USER_CREATED',
    payload: payload
  }
};

export const updateUser = (user, _id) => {
  console.log("You updated a user: ", user);
  let payload = {};
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "PUT",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: "http://localhost:3000/api/users/" + _id,
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
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/users/auth');
  }
  return {
    type: 'USER_UPDATED',
    payload: payload
  }
};

export const deleteUser = (_id) => {
  console.log("You deleted a user: ", _id);
  let payload = {};
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "DELETE",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: "http://localhost:3000/api/users/" + _id,
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
  } else {
    toastr.warning('Need to login.');
    hashHistory.push('/users/auth');
  }
  return {
    type: 'USER_DELETED',
    payload: payload
  }
};

export const authUser = (user) => {
  console.log("You authenticate with user: ", user);
  let payload = {};
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/auth",
    data: user,
    success: function(data) {
      if (data.success) {
        cookie.save('x-access-token', data.token);
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

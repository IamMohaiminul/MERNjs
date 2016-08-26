'use strict';

import $ from 'jquery';

import * as AuthService from '../services/auth';

const API_URL = 'http://localhost:3000/api/';

/*
 * get all user
 */
export const getAllUser = () => {
  // check cookie token availability
  if (AuthService.isAuthWithFailTrigger()) {
    let payload = [];
    $.ajax({
      type: 'GET',
      beforeSend: function (req) {
        req.setRequestHeader('x-access-token', AuthService.getToken());
      },
      url: API_URL + 'users',
      success: function (data) {
        payload = data;
      },
      error: function (xhr, sts, err) {
        console.log('userReducer: ', xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_LIST',
      payload: payload
    };
  }
};

/*
 * select a user
 */
export const selectUser = (user) => {
  // check cookie token availability
  if (AuthService.isAuthWithFailTrigger()) {
    return {
      type: 'USER_SELECTED',
      payload: user
    };
  }
};

/*
 * create a user
 */
export const createUser = (user) => {
  if (AuthService.isAuthWithFailTrigger()) {
    let payload = {};
    $.ajax({
      type: 'POST',
      beforeSend: function (req) {
        req.setRequestHeader('x-access-token', AuthService.getToken());
      },
      url: API_URL + 'users',
      data: user,
      contentType: false,   // The content type used when sending data to the server.
      cache: false,   // To unable request pages to be cached
      processData: false,   // To send DOMDocument or non processed data file it is set to false
      success: function (data) {
        payload = data;
      },
      error: function (xhr, sts, err) {
        console.warn('createUser: ', xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_CREATED',
      payload: payload
    };
  }
};

/*
 * update a user
 */
export const updateUser = (user, _id) => {
  // check cookie token availability
  if (AuthService.isAuthWithFailTrigger()) {
    let payload = {};
    $.ajax({
      type: 'PUT',
      beforeSend: function (req) {
        req.setRequestHeader('x-access-token', AuthService.getToken());
      },
      url: API_URL + 'users/' + _id,
      data: user,
      success: function (data) {
        payload = data;
      },
      error: function (xhr, sts, err) {
        console.warn('updateUser: ', xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_UPDATED',
      payload: payload
    };
  }
};

/*
 * delete a user
 */
export const deleteUser = (_id) => {
  // check cookie token availability
  if (AuthService.isAuthWithFailTrigger()) {
    let payload = {};
    $.ajax({
      type: 'DELETE',
      beforeSend: function (req) {
        req.setRequestHeader('x-access-token', AuthService.getToken());
      },
      url: API_URL + 'users/' + _id,
      success: function (data) {
        payload = data;
      },
      error: function (xhr, sts, err) {
        console.warn('deleteUser: ', xhr, sts, err);
      },
      async: false
    });
    return {
      type: 'USER_DELETED',
      payload: payload
    };
  }
};

/*
 * authenticate a user
 */
export const authUser = (user) => {
  let payload = {};
  $.ajax({
    type: 'POST',
    url: API_URL + 'auth',
    data: user,
    success: function (data) {
      AuthService.setToken(data.token);
      payload = data;
    },
    error: function (xhr, sts, err) {
      console.warn('authUser: ', xhr, sts, err);
    },
    async: false
  });
  return {
    type: 'USER_AUTHED',
    payload: payload
  };
};

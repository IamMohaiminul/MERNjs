import $ from 'jquery';
import cookie from 'react-cookie';

import config from '../../../../config';

/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const userReducer = () => {
  let users = [];
  if (cookie.load('x-access-token')) {
    $.ajax({
      type: "GET",
      beforeSend: function (req)
      {
        req.setRequestHeader("x-access-token", cookie.load('x-access-token'));
      },
      url: config.API_URL + 'users',
      success: function(data) {
        if (data.success) users = data.users;
      },
      error: function (xhr, sts, err) {
        console.log("userReducer: ", xhr, sts, err);
      },
      async: false
    });
  }
  return users;
};
/*
 * All reducers get two parameters passed in, state and action that occurred
 *  > state isn't entire apps state, only the part of state that this reducer is responsible for
 */
// "state = null" is set so that we don't throw an error when app first boots up
export const activeUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;
    case 'USER_CREATED':
      return null;
      break;
    case 'USER_UPDATED':
      return null;
      break;
    case 'USER_DELETED':
      return null;
      break;
    case 'USER_AUTHED':
      return null;
      break;
  }
  return state;
};

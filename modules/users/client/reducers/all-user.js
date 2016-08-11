import $ from 'jquery';
import cookie from 'react-cookie';

import config from '../../../../config';
/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const allUserReducer = () => {
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

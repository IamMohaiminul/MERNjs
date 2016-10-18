'use strict';

import axios from 'axios';

/*
 * Auth a user
 */
export const authLogin = (user, callback) => {
  return function(dispatch) {
    dispatch({type: 'AUTH_LOGIN_REQUEST'});
    axios.post('auth', user)
      .then((response) => {
        dispatch({type: 'AUTH_LOGIN_SUCCESS', payload: response.data});
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((error) => {
        dispatch({type: 'AUTH_LOGIN_FAILURE', payload: error.response.data});
        if (typeof callback === 'function') {
          callback(error.response.data);
        }
      });
  }
};

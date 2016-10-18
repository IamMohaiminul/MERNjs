'use strict';

import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';

/*
 * Get all user
 */
export const getAllUser = (callback) => {
  return function(dispatch) {
    dispatch({type: 'FETCH_ALL_USER_REQUEST'});
    axios.get('users')
      .then((response) => {
        dispatch({type: 'FETCH_ALL_USER_SUCCESS', payload: response.data});
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((error) => {
        dispatch({type: 'FETCH_ALL_USER_FAILURE'});
        if (error.response.status == 401) {
          toastr.error(error.response.data.message, 'User');
          browserHistory.push('/auth/logout');
        }
        if (typeof callback === 'function') {
          callback(error.response.data, null);
        }
      });
  }
};

'use strict';

import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';

/*
 * Get all role
 */
export const getAllRole = (callback) => {
  return function(dispatch) {
    dispatch({type: 'FETCH_ALL_ROLE_REQUEST'});
    axios.get('roles')
      .then((response) => {
        dispatch({type: 'FETCH_ALL_ROLE_SUCCESS', payload: response.data});
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((error) => {
        dispatch({type: 'FETCH_ALL_ROLE_FAILURE'});
        if (error.response.status == 401) {
          toastr.error(error.response.data.message, 'Role');
          browserHistory.push('/auth/logout');
        }
        if (typeof callback === 'function') {
          callback(error.response.data, null);
        }
      });
  }
};

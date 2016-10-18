'use strict';

import axios from 'axios';
import toastr from 'toastr';
import { browserHistory } from 'react-router';

/*
 * Create a role
 */
export const createRole = (role, callback) => {
  return function(dispatch) {
    dispatch({type: 'CREATE_ROLE_REQUEST'});
    axios.post('roles', role)
      .then((response) => {
        dispatch({type: 'CREATE_ROLE_SUCCESS', payload: response.data});
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((error) => {
        dispatch({type: 'CREATE_ROLE_FAILURE'});
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

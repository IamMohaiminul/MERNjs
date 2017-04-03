import axios from 'axios';

export function getAllUser(callback) {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_ALL_USER_REQUEST',
    });
    axios.get('users')
      .then((response) => {
        dispatch({
          type: 'FETCH_ALL_USER_SUCCESS',
          payload: response.data,
        });
        if (typeof callback === 'function') {
          callback(null, response.data);
        }
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_ALL_USER_FAILURE',
          payload: error.response.data,
        });
        if (typeof callback === 'function') {
          callback(error.response.data);
        }
      });
  };
}

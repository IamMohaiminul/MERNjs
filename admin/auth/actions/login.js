import axios from 'axios';

/*
 * Get all user
 */
export const loginUser = ((object, callback) => {
  try {
    return function (dispatch) {
      dispatch({ type: 'AUTH_LOGIN_REQUEST' });
      axios.post('auth', object)
        .then((response) => {
          dispatch({
            type: 'AUTH_LOGIN_SUCCESS',
            payload: response.data,
          });
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('email', response.data.data.email);
          if (typeof callback === 'function') {
            callback(null, response.data);
          }
        })
        .catch((error) => {
          dispatch({ type: 'AUTH_LOGIN_FAILURE' });
          if (typeof callback === 'function') {
            callback(error.response.data, null);
          }
        });
    };
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Error in loginUser',
      error: e,
    });
  }
});

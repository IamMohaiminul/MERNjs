import axios from 'axios';

/*
 * Get all user
 */
export const registerUser = ((object, callback) => {
  try {
    return function (dispatch) {
      dispatch({ type: 'AUTH_REGISTER_REQUEST' });
      axios.post('auth/register', object)
        .then((response) => {
          dispatch({
            type: 'AUTH_REGISTER_SUCCESS',
            payload: response.data,
          });
          if (typeof callback === 'function') {
            callback(null, response.data);
          }
        })
        .catch((error) => {
          dispatch({ type: 'AUTH_REGISTER_FAILURE' });
          if (typeof callback === 'function') {
            callback(error.response.data, null);
          }
        });
    };
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Error in registerUser',
      error: e,
    });
  }
});

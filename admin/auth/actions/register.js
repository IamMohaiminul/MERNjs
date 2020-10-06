import axios from 'axios';

const registerUser = (object, callback) => (dispatch) => {
  dispatch({ type: 'AUTH_REGISTER_REQUEST' });
  axios
    .post('/auth/register', object)
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

export default registerUser;

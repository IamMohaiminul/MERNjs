import axios from 'axios';

const loginUser = (object, callback) => (dispatch) => {
  dispatch({
    type: 'AUTH_LOGIN_REQUEST',
  });
  axios
    .post('/auth', object)
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
    .catch((err) => {
      console.log('auth_err: ', err);
      dispatch({ type: 'AUTH_LOGIN_FAILURE' });
      if (typeof callback === 'function') {
        callback(err.response.data, null);
      }
    });
};

export default loginUser;

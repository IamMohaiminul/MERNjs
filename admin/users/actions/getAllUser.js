import axios from 'axios';

const getAllUser = (callback) => (dispatch) => {
  dispatch({
    type: 'FETCH_ALL_USER_REQUEST',
  });
  axios
    .get('/users')
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
        payload: err.response.data,
      });
      if (typeof callback === 'function') {
        callback(err.response.data);
      }
    });
};

export default getAllUser;

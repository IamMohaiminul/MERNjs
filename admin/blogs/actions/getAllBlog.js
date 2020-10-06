import axios from 'axios';

const getAllBlog = (callback) => (dispatch) => {
  dispatch({
    type: 'FETCH_ALL_BLOG_REQUEST',
  });
  axios
    .get('/blogs')
    .then((response) => {
      dispatch({
        type: 'FETCH_ALL_BLOG_SUCCESS',
        payload: response.data,
      });
      if (typeof callback === 'function') {
        callback(null, response.data);
      }
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_ALL_BLOG_FAILURE',
        payload: err.response.data,
      });
      if (typeof callback === 'function') {
        callback(err.response.data);
      }
    });
};

export default getAllBlog;

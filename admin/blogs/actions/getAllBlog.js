import axios from 'axios';

export function getAllBlog(callback) {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_ALL_BLOG_REQUEST',
    });
    axios
      .get('blogs')
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
          payload: error.response.data,
        });
        if (typeof callback === 'function') {
          callback(error.response.data);
        }
      });
  };
}

/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */

const defaultState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  email: localStorage.getItem('email') ? localStorage.getItem('email') : null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return state;
    case 'AUTH_LOGIN_FAILURE':
      return state;
    case 'AUTH_LOGIN_SUCCESS':
      return Object.assign(state, {
        token: action.payload.data.token ? action.payload.data.token : null,
        email: action.payload.data.email ? action.payload.data.email : null,
      });
    case 'AUTH_LOGOUT_SUCCESS':
      return Object.assign(state, {
        token: null,
        email: null,
      });
    default:
      return state;
  }
};

export default authReducer;

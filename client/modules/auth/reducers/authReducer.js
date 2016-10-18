'use strict';

const defaultState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  permission: localStorage.getItem('permission') ? localStorage.getItem('permission') : null
}
/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const authReducer = (state = defaultState, action) => {
  // console.log('authReducer', action.payload);
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return state;
    case 'AUTH_LOGIN_FAILURE':
      return state;
    case 'AUTH_LOGIN_SUCCESS':
      return Object.assign({}, state, {
				token: action.payload.data.token ? action.payload.data.token : null,
        permission: action.payload.data.role.permission ? JSON.stringify(action.payload.data.role.permission) : null
			});
    case 'AUTH_LOGOUT':
      return Object.assign({}, state, {
				token: null,
        permission: null
			});
    default:
      return state;
  }
};

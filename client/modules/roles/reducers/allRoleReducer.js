'use strict';

/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const allRoleReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_ROLE_REQUEST':
      return state;
    case 'FETCH_ALL_ROLE_FAILURE':
      return state;
    case 'FETCH_ALL_ROLE_SUCCESS':
      return [...action.payload.data];;
    default:
      return state;
  }
};

'use strict';

/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const allUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_USER_REQUEST':
      return state;
    case 'FETCH_ALL_USER_FAILURE':
      return state;
    case 'FETCH_ALL_USER_SUCCESS':
      return [...action.payload.data];;
    default:
      return state;
  }
};

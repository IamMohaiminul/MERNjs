import $ from 'jquery';

/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const userReducer = () => {
  let users = [];
  $.ajax({
    url: "http://localhost:3000/api/users",
    success: function(data) {
      users = data.users;
    },
    async: false
  });
  return users;
};
/*
 * All reducers get two parameters passed in, state and action that occurred
 *  > state isn't entire apps state, only the part of state that this reducer is responsible for
 */
// "state = null" is set so that we don't throw an error when app first boots up
export const activeUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;
    case 'USER_CREATED':
      return action.payload;
      break;
    case 'USER_UPDATED':
      return action.payload;
      break;
    case 'USER_DELETED':
      return action.payload;
      break;
  }
  return state;
};

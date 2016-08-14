/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */
export const allUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'USER_LIST':
      return action.payload.users;
      break;
    default:
      return state;
  }
};

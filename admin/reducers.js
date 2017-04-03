import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers/auth.js';
import { allUserReducer } from './users/reducers/allUser.js';
import { allBlogReducer } from './blogs/reducers/allBlog.js';

const reducers = combineReducers({
  auth: authReducer,
  allUser: allUserReducer,
  allBlog: allBlogReducer,
});

export default reducers;

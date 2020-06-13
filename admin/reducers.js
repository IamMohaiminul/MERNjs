import { combineReducers } from 'redux';

import authReducer from './auth/reducers/auth';
import { allUserReducer } from './users/reducers/allUser';
import { allBlogReducer } from './blogs/reducers/allBlog';

const reducers = combineReducers({
  auth: authReducer,
  allUser: allUserReducer,
  allBlog: allBlogReducer,
});

export default reducers;

import { combineReducers } from 'redux';
import authReducer from './auth/reducers/auth';
import allBlogReducer from './blogs/reducers/allBlog';
import allUserReducer from './users/reducers/allUser';

const reducers = combineReducers({
  auth: authReducer,
  allUser: allUserReducer,
  allBlog: allBlogReducer,
});

export default reducers;

import { combineReducers } from 'redux';
import allBlogReducer from './blogs/reducers/allBlog';

const reducers = combineReducers({
  allBlog: allBlogReducer,
});

export default reducers;

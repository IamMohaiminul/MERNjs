import { combineReducers } from 'redux';

import { allBlogReducer } from './blogs/reducers/allBlog.js';

const reducers = combineReducers({
  allBlog: allBlogReducer,
});

export default reducers;

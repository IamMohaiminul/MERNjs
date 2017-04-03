import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers.js';

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger())
);

export default store;

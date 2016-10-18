'use strict';

import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers.js';

const checkToken = (store) => (next) => (action) => {
	axios.defaults.headers.common['auth-token'] = store.getState().auth.token ? store.getState().auth.token : null;
	return next(action);
};

const store = createStore(
  reducers,
  applyMiddleware(thunk, checkToken, logger())
);

export default store;

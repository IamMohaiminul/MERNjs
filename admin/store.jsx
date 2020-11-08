import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const accessToken = (store) => (next) => (action) => {
  axios.defaults.headers.common['x-access-token'] = store.getState().auth.token
    ? store.getState().auth.token
    : null;
  return next(action);
};

const store = createStore(
  reducers,
  applyMiddleware(thunk, accessToken, logger),
);

export default store;

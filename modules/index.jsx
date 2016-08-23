'use strict';

// Import toastr CSS
import '../node_modules/toastr/build/toastr.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import userReducers from './users/client/reducers';
import Routes from './routes.jsx';

const store = createStore(userReducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>, document.getElementById('app'));

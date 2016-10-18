'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config.js';

import store from './store.js';
import Routes from './routes.jsx';

import '../public/stylesheets/style.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

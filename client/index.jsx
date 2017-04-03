import '../public/stylesheets/client.css';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './config.jsx';

import store from './store.jsx';
import Routes from './routes.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

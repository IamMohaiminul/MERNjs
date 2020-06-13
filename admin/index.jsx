import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/stylesheets/lux.bootswatch.css';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import '../public/stylesheets/admin.css';

import './config';

import store from './store';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);

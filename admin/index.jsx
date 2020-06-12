import '../public/stylesheets/admin.css';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'toastr/build/toastr.min.css';
import '../public/stylesheets/client.css';

import './config.jsx';

import store from './store.jsx';
import Routes from './routes.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);

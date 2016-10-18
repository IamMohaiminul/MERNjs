'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import toastr from 'toastr';

import AuthLayout from '../layouts/AuthLayout.jsx';
import AuthLoginContainer from '../containers/AuthLoginContainer.jsx';

function alreadyLogin(nextState, replaceState) {
  if (localStorage.getItem('token')) {
    toastr.success('Already login', 'Auth');
    replaceState('/');
  }
}

function signOut(nextState, replaceState) {
  localStorage.removeItem('token');
  localStorage.removeItem('permission');
  localStorage.removeItem('email');
  // toastr.success('Logout successfully', 'Auth');
  replaceState('/auth');
}

export default function () {
  return (
    <Route path='auth' component={AuthLayout}>
      <IndexRoute component={AuthLoginContainer} onEnter={alreadyLogin} />
      <Route path='logout' onEnter={signOut} />
    </Route>
  );
};

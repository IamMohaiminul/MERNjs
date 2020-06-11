import React from 'react';
import toastr from 'toastr';
import { Route, IndexRedirect } from 'react-router';

import LoginContainer from '../containers/Login.jsx';
import RegistrationContainer from '../containers/Registration.jsx';

function signOut(nextState, replaceState) {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  toastr.success('Logout successfully', 'MERNjs');
  replaceState('/admin/auth');
}

export default function () {
  return (
    <Route path="auth">
      <IndexRedirect to="login" />
      <Route path="login" component={LoginContainer} />
      <Route path="register" component={RegistrationContainer} />
      <Route path="logout" onEnter={signOut} />
    </Route>
  );
}

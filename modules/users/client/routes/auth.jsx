import React from 'react';
import {Route, IndexRoute} from 'react-router';

import * as AuthService from '../services/auth';

import AuthLayout from '../layouts/auth-layout.jsx';
import AuthComponent from '../components/auth-component.jsx';

function isGuestRouter(nextState, replaceState) {
  AuthService.isGuestRouter(nextState, replaceState);
}

function logOutRouter(nextState, replaceState) {
  AuthService.logOutRouter(nextState, replaceState);
}

export default function () {
  return (
    <Route path='auth' component={AuthLayout}>
      <IndexRoute component={AuthComponent} onEnter={isGuestRouter}/>
      <Route path='logout' onEnter={logOutRouter}/>
    </Route>
  )
};

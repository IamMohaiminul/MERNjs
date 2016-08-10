import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';
import toastr from 'toastr';

import * as AuthService from '../services/auth';

import UserLayout from '../layouts/UserLayout';
import AuthLayout from '../layouts/AuthLayout';
import Users from '../components/Users';
import Auth from '../components/Auth';

function isAuthRouter(nextState, replaceState) {
  AuthService.isAuthRouter(nextState, replaceState);
}

function isGuestRouter(nextState, replaceState) {
  AuthService.isGuestRouter(nextState, replaceState);
}

function logOutRouter(nextState, replaceState) {
  AuthService.logOutRouter(nextState, replaceState);
}

export default function() {
  return (
    <Route>
      <Route path='users' component={UserLayout} onEnter={isAuthRouter}>
        <IndexRoute component={Users} />
      </Route>
      <Route path='auth' component={AuthLayout}>
        <IndexRoute component={Auth} onEnter={isGuestRouter} />
        <Route path='logout' onEnter={logOutRouter} />
      </Route>
      {/*<Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />*/}
    </Route>
  )
};

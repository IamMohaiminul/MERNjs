import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';
import toastr from 'toastr';

import UserLayout from '../layouts/UserLayout';
import Users from '../components/Users';
import Auth from '../components/Auth';

// checking is login or not
function isAuth(nextState, replaceState) {
  if (!cookie.load('x-access-token')) {
    toastr.warning('Need to login.');
    replaceState('/users/auth');
  }
}
// checking is already login or not
function isGuest(nextState, replaceState) {
  if (cookie.load('x-access-token')) {
    toastr.info('Already login');
    replaceState('/users');
  }
}
// trigger the logout
function signOut(nextState, replaceState) {
  cookie.remove('x-access-token');
  toastr.success('Logout successfully');
  replaceState('/users/auth');
}

export default function() {
  return (
    <Route path='users' component={UserLayout}>
      <IndexRoute component={Users} onEnter={isAuth} />
      <Route path='auth'>
        <IndexRoute component={Auth} onEnter={isGuest} />
        <Route path='logout' onEnter={signOut}/>
      </Route>
      {/*<Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />*/}
    </Route>
  )
};

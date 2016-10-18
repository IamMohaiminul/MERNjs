'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import toastr from 'toastr';

import UserLayout from '../layouts/UserLayout.jsx';
import UserListContainer from '../containers/UserListContainer.jsx';
import UserCreateContainer from '../containers/UserCreateContainer.jsx';

function requireAuth(nextState, replaceState) {
  if (!localStorage.getItem('token')) {
    toastr.warning('Need to login', 'Auth');
    replaceState('/auth');
  }
}

function requireReadAccess(nextState, replaceState) {
  if (!JSON.parse(localStorage.getItem('permission')).user.read) {
    toastr.warning('Not allow to access this feature', 'User');
    replaceState('/');
  }
}

function requireCreateAccess(nextState, replaceState) {
  if (!JSON.parse(localStorage.getItem('permission')).user.create) {
    toastr.warning('Not allow to access this feature', 'User');
    replaceState('/users');
  }
}

export default function () {
  return (
    <Route path='users' component={UserLayout} onEnter={requireAuth}>
      <IndexRoute component={UserListContainer} onEnter={requireReadAccess} />
      <Route path='create' component={UserCreateContainer} onEnter={requireCreateAccess} />
      {/*<Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />*/}
    </Route>
  );
};

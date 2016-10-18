'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import toastr from 'toastr';

import RoleLayout from '../layouts/RoleLayout.jsx';
import RoleListContainer from '../containers/RoleListContainer.jsx';
import RoleCreateContainer from '../containers/RoleCreateContainer.jsx';

function requireAuth(nextState, replaceState) {
  if (!localStorage.getItem('token')) {
    toastr.warning('Need to login', 'Auth');
    replaceState('/auth');
  }
}

function requireReadAccess(nextState, replaceState) {
  if (!JSON.parse(localStorage.getItem('permission')).role.read) {
    toastr.warning('Not allow to access this feature', 'Employee');
    replaceState('/');
  }
}

function requireCreateAccess(nextState, replaceState) {
  if (!JSON.parse(localStorage.getItem('permission')).role.create) {
    toastr.warning('Not allow to access this feature', 'Employee');
    replaceState('/roles');
  }
}

export default function () {
  return (
    <Route path='roles' component={RoleLayout} onEnter={requireAuth}>
      <IndexRoute component={RoleListContainer} onEnter={requireReadAccess} />
      <Route path='create' component={RoleCreateContainer} onEnter={requireCreateAccess} />
      {/*<Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />*/}
    </Route>
  );
};

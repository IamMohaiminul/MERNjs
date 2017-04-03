import React from 'react';
import { Route, IndexRoute } from 'react-router';
import toastr from 'toastr';

import DashboardContainer from '../containers/Dashboard.jsx';

function isAuth(nextState, replaceState) {
  if (!localStorage.getItem('token') || !localStorage.getItem('email')) {
    replaceState('/admin/auth');
  }
}

export default function () {
  return (
    <Route path='dashboard'>
      <IndexRoute component={DashboardContainer} onEnter={isAuth} />
    </Route>
  );
}

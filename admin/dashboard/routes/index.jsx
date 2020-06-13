import React from 'react';
import { Redirect } from 'react-router';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardContainer from '../containers/Dashboard';
import NotFoundComponent from '../../core/components/notFound';

function isAuth() {
  if (!localStorage.getItem('token') || !localStorage.getItem('email')) {
    return false;
  }
  return true;
}

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (isAuth() ? <DashboardContainer /> : <Redirect to="/admin/auth" />)}
      />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

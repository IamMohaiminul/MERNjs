import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { isAuth } from '../../utils';
import DashboardContainer from '../containers/Dashboard';
import NotFoundComponent from '../../core/components/notFound';

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

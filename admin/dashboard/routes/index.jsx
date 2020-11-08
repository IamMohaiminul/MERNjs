import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundComponent from '../../core/components/notFound';
import { AdminRoute } from '../../core/components/privateRoute';
import DashboardContainer from '../containers/Dashboard';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <AdminRoute exact path={match.path} component={DashboardContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

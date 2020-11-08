import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundComponent from '../../core/components/notFound';
import { AdminRoute } from '../../core/components/privateRoute';
import UserContainer from '../containers/user';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <AdminRoute exact path={match.path} component={UserContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

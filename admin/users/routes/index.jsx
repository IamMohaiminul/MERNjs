import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { AdminRoute } from '../../core/components/privateRoute';
import UserContainer from '../containers/user';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <AdminRoute exact path={match.path} component={UserContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

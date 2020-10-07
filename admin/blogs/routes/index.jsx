import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { AdminRoute } from '../../core/components/privateRoute';
import BlogContainer from '../containers/blog';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <AdminRoute exact path={match.path} component={BlogContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

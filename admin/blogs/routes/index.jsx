import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundComponent from '../../core/components/notFound';
import { AdminRoute } from '../../core/components/privateRoute';
import BlogContainer from '../containers/blog';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <AdminRoute exact path={match.path} component={BlogContainer} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

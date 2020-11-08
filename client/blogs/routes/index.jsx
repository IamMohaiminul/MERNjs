import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundComponent from '../../core/components/notFound';
import BlogContainer from '../containers/blog';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path} component={BlogContainer} />
      <Route
        path={`${match.path}/about`}
        render={() => <p>blogs about page...</p>}
      />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

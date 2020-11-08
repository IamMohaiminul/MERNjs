import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import BlogContainer from '../containers/blog';
import NotFoundComponent from '../../core/components/notFound';

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

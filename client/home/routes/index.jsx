import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundComponent from '../../core/components/notFound';
import HomeContainer from '../containers/home';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path} component={HomeContainer} />
      <Route
        path={`${match.path}/about`}
        render={() => <p>home about page...</p>}
      />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

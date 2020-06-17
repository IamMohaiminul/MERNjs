import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import HomeContainer from '../containers/home';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path} component={HomeContainer} />
      <Route path={`${match.path}/about`} render={() => <p>home about page...</p>} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

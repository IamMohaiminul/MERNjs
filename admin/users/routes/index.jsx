import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import UserContainer from '../containers/user';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path} component={UserContainer} />
      <Route path={`${match.path}/about`} render={() => <p>users about page...</p>} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

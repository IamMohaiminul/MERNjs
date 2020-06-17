import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { signOut } from '../../utils';
import { AuthRoute } from '../../core/components/privateRoute';
import LoginContainer from '../containers/Login';
import RegistrationContainer from '../containers/Registration';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/login`} />
      </Route>
      <AuthRoute path={`${match.path}/login`} component={LoginContainer} />
      <AuthRoute path={`${match.path}/register`} component={RegistrationContainer} />
      <Route
        path={`${match.path}/logout`}
        render={() => (signOut() ? <Redirect to={`${match.path}/login`} /> : null)}
      />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

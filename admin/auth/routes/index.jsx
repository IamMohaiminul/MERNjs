import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { isAuth, signOut } from '../../utils';
import LoginContainer from '../containers/Login';
import RegistrationContainer from '../containers/Registration';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (isAuth() ? <Redirect to="/admin/dashboard" /> : <Redirect to={`${match.path}/login`} />)}
      />
      <Route exact path={`${match.path}/login`} component={LoginContainer} />
      <Route path={`${match.path}/register`} component={RegistrationContainer} />
      <Route
        path={`${match.path}/logout`}
        render={() => (signOut() ? <Redirect to={`${match.path}/login`} /> : null)}
      />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

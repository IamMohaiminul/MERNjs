import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import toastr from 'toastr';

import LoginContainer from '../containers/Login';
import RegistrationContainer from '../containers/Registration';
import NotFoundComponent from '../../core/components/notFound';

function signOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  toastr.success('Logout successfully', 'MERNjs');
  return true;
}

export default function () {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.path}>
        <Redirect to={`${match.path}/login`} />
      </Route>
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

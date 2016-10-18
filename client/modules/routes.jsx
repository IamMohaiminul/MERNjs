'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import CoreLayout from './core/layouts/CoreLayout.jsx';
import HomeComponent from './core/components/HomeComponent.jsx';
import NotFoundComponent from './core/components/NotFoundComponent.jsx';

import AuthRoute from './auth/routes/AuthRoute.jsx';
import RoleRoute from './roles/routes/RoleRoute.jsx';
import UserRoute from './users/routes/UserRoute.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
          <IndexRoute component={HomeComponent} />
        </Route>
        {AuthRoute()}
        {RoleRoute()}
        {UserRoute()}
        <Route path='*' component={CoreLayout}>
          <IndexRoute component={NotFoundComponent} />
        </Route>
      </Router>
    );
  }
}

export default Routes;

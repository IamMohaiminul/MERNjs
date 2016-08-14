import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import CoreLayout from './core/client/layouts/core-layout';
import Home from './core/client/components/home';
import NotFound from './core/client/components/not-found';

import AuthRoute from './users/client/routes/auth';
import UserRoute from './users/client/routes/user';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
          <IndexRoute component={Home} />
        </Route>
        {AuthRoute()}
        {UserRoute()}
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default Routes;

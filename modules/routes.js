import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import CoreLayout from './core/client/layouts/CoreLayout';
import Home from './core/client/components/Home';
import NotFound from './core/client/components/NotFound';

import UserRoute from './users/client/routes';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={CoreLayout}>
          <IndexRoute component={Home} />
        </Route>
        {UserRoute()}
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default Routes;

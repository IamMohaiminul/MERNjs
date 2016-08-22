import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import CoreLayout from './core/client/layouts/index.jsx';
import Home from './core/client/components/home.jsx';
import NotFound from './core/client/components/not-found.jsx';

import AuthRoute from './users/client/routes/auth.jsx';
import UserRoute from './users/client/routes/user.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
          <IndexRoute component={Home}/>
        </Route>
        {AuthRoute()}
        {UserRoute()}
        <Route path='*' component={NotFound}/>
      </Router>
    )
  }
}

export default Routes;

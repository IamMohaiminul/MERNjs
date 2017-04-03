import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import CoreLayout from './core/layouts/index.jsx';
import NotFoundComponent from './core/components/notFound.jsx';

import homeRoute from './home/routes/index.jsx';
import blogRoute from './blogs/routes/index.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
          <IndexRedirect to='home'/>
          {homeRoute()}
          {blogRoute()}
          <Route path='*' component={NotFoundComponent} />
        </Route>
      </Router>
    );
  }
}

export default Routes;

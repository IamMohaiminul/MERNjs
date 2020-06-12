import React, { Component } from 'react';
import { Router, Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CoreLayout from './core/layouts/index.jsx';
import NotFoundComponent from './core/components/notFound.jsx';

import homeRoute from './home/routes/index.jsx';
import blogRoute from './blogs/routes/index.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <CoreLayout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={homeRoute} />
            <Route path="/blogs" component={blogRoute} />
            <Route component={NotFoundComponent} />
          </Switch>
        </CoreLayout>
      </Router>
    );
  }
}

export default Routes;

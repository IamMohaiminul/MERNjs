import React from 'react';
import { Router, Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CoreLayout from './core/layouts/index';
import NotFoundComponent from './core/components/notFound';

import homeRoute from './home/routes/index';
import blogRoute from './blogs/routes/index';

const Routes = () => (
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

export default Routes;

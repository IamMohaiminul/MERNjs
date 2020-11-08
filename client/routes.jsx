import { createBrowserHistory } from 'history';
import React from 'react';
import { Redirect, Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import blogRoute from './blogs/routes/index';
import NotFoundComponent from './core/components/notFound';
import CoreLayout from './core/layouts/index';
import homeRoute from './home/routes/index';

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

import { createBrowserHistory } from 'history';
import React from 'react';
import { Redirect, Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import authRoute from './auth/routes';
import blogRoute from './blogs/routes';
import NotFoundComponent from './core/components/notFound';
import CoreLayout from './core/layouts';
import dashboardRoute from './dashboard/routes';
import userRoute from './users/routes';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <CoreLayout>
      <Switch>
        <Route exact path="/admin">
          <Redirect to="/admin/dashboard" />
        </Route>
        <Route path="/admin/auth" component={authRoute} />
        <Route path="/admin/dashboard" component={dashboardRoute} />
        <Route path="/admin/users" component={userRoute} />
        <Route path="/admin/blogs" component={blogRoute} />
        <Route component={NotFoundComponent} />
      </Switch>
    </CoreLayout>
  </Router>
);

export default Routes;

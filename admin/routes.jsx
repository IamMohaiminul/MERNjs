import React from 'react';
import { Router, Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CoreLayout from './core/layouts';
import NotFoundComponent from './core/components/notFound';

import authRoute from './auth/routes';
import dashboardRoute from './dashboard/routes';
// import userRoute from './users/routes';
// import blogRoute from './blogs/routes';

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <CoreLayout>
      <Switch>
        <Route exact path="/admin">
          <Redirect to="/admin/dashboard" />
        </Route>
        <Route path="/admin/auth" component={authRoute} />
        {/* <Route path="/admin/about" render={() => <p>admin about page...</p>} /> */}
        <Route path="/admin/dashboard" component={dashboardRoute} />
        {/* <Route path="/admin/users" component={userRoute} /> */}
        {/* <Route path="/admin/blogs" component={blogRoute} /> */}
        <Route component={NotFoundComponent} />
      </Switch>
    </CoreLayout>
  </Router>
);

export default Routes;

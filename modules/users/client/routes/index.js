import React from 'react';
import { Route, IndexRoute } from 'react-router';

import UserLayout from '../layouts/UserLayout';
import Users from '../components/Users';

export default function() {
  return (
    <Route path='users' component={UserLayout}>
      <IndexRoute component={Users} />
      {/*<Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />*/}
    </Route>
  )
};

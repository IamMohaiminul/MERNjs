import React from 'react';
import { Route, IndexRoute } from 'react-router';

import UserLayout from '../layouts/UserLayout';
import UserIndex from '../components/UserIndex';
import UserCreate from '../components/UserCreate';
import UserShow from '../components/UserShow';
import UserEdit from '../components/UserEdit';

export default function() {
  return (
    <Route path='users' component={UserLayout}>
      <IndexRoute component={UserIndex} />
      <Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />
    </Route>
  )
};

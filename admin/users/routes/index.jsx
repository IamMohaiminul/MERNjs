import React from 'react';
import { Route, IndexRoute } from 'react-router';

import UserContainer from '../containers/user.jsx';

export default function () {
  return (
    <Route path='users'>
      <IndexRoute component={UserContainer} />
    </Route>
  );
};

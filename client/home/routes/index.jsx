import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeContainer from '../containers/home.jsx';

export default function () {
  return (
    <Route path="home">
      <IndexRoute component={HomeContainer} />
    </Route>
  );
}

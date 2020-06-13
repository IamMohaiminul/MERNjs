import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BlogContainer from '../containers/blog';

export default function () {
  return (
    <Route path="blogs">
      <IndexRoute component={BlogContainer} />
    </Route>
  );
}

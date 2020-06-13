import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogContainer from '../containers/blog';

export default function () {
  return (
    <Switch>
      <Route exact path="/blogs" component={BlogContainer} />
      <Route path="/blogs/about" render={() => <p>blogs about page...</p>} />
    </Switch>
  );
}

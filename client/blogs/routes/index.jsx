import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogContainer from '../containers/blog';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  return (
    <Switch>
      <Route exact path="/blogs" component={BlogContainer} />
      <Route path="/blogs/about" render={() => <p>blogs about page...</p>} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

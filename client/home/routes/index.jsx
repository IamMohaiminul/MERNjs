import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from '../containers/home';
import NotFoundComponent from '../../core/components/notFound';

export default function () {
  return (
    <Switch>
      <Route exact path="/home" component={HomeContainer} />
      <Route path="/home/about" render={() => <p>home about page...</p>} />
      <Route component={NotFoundComponent} />
    </Switch>
  );
}

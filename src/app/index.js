import React from 'react';
import Home from './pages/home';
import VideoDetail from './pages/videoDetail';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route path="/videos/:id" component={VideoDetail} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import seoulApp from './seoulApp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={seoulApp} />
      </Switch>
    </BrowserRouter>
  );
}

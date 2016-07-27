import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Homepage from './components/homepage';
import AddProject from './components/add_project';
import Login from './components/login';

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="login" component={Login} />
      <Route path="addproject" component={AddProject} />
    </Route>
);

export default routes;
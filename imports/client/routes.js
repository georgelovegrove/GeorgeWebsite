import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Homepage from './components/homepage';
import AddProject from './components/add_project';
import Login from './components/login';
import Project from './components/projects/project';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="login" component={Login} />
    <Route path="addproject" component={AddProject} />
    <Route path="project/:projectName" component={Project} />
  </Route>
);

export default routes;
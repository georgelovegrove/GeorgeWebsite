import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
//import Homepage from './components/homepage';
import HomepageContainer from './components/homepage_container';
//import AddProject from './components/add_project';
import AddProjectContainer from './components/add_project_container';
//import Login from './components/login';
import LoginContainer from './components/login_container';

// TODO Check whether their is a better way than multiple containers

const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomepageContainer} />
      <Route path="login" component={LoginContainer} />
      <Route path="addproject" component={AddProjectContainer} />
    </Route>
);

export default routes;
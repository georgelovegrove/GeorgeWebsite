import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';

import store from './store'; 
import { loadUser } from './actions/user_actions';
import { loadProjects } from './actions/project_actions';
import App from './components/app';
import Homepage from './components/homepage';
import AddProject from './components/add_project';
import Login from './components/login';
import ChangePassword from './components/change_password';
import Project from './components/projects/project';

Meteor.startup(() => {
  ReactDOM.render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Homepage} />
          <Route path="login" component={Login} onEnter={checkUserNotLoggedIn} />
          <Route path="changepassword" component={ChangePassword} onEnter={checkUserLoggedIn}/>
          <Route path="addproject" component={AddProject} onEnter={checkUserLoggedIn}/>
          <Route path="project/:projectName" component={Project} />
        </Route>
      </Router>
    </Provider>
  ), document.querySelector('.container'));
  store.dispatch(loadUser());
  store.dispatch(loadProjects());
});

function checkUserLoggedIn(nextState, transition) { 
  if (!Meteor.user()) {
    transition({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function checkUserNotLoggedIn(nextState, transition) { 
  if (Meteor.user()) {
    transition({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
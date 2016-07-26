import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Login from './login';



export default LoginContainer = createContainer(() => {
  return {
    meteorUser: Meteor.user(),

  };
}, Login);
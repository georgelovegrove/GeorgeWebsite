import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Homepage from './homepage';



export default HomepageContainer = createContainer(() => {
  return {
    meteorUser: Meteor.user(),

  };
}, Homepage);
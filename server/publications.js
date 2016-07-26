import { Meteor } from 'meteor/meteor';

import Projects from '../imports/collections/projects';



Meteor.publish('projects', function() {
  return Projects.find({});
});

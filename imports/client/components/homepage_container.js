import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Projects from '../../collections/projects';
import Homepage from './homepage';



export default HomepageContainer = createContainer(() => {

	Meteor.subscribe('projects');

	return {
		meteorUser: Meteor.user(),
		projectsList: Projects.find().fetch()

	};
}, Homepage);
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import AddProject from './add_project';



export default AddProjectContainer = createContainer(() => {

	// TODO find a way to do redirect correctly

	return {
		meteorUser: Meteor.user(),

	};
}, AddProject);
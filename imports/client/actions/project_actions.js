import { Meteor } from 'meteor/meteor';

export function addProject(params) {

	return dispatch => {
		Meteor.call('projects.insert', params, (error, payload) => {

		    if (error) {
		 		// TODO Add error handling
				console.log('Error: ', error);
				return;
		    } 
		});
	};
}

export function removeProject(params) {

	return dispatch => {
		// TODO reducer and method needs implementing
		Meteor.call('projects.remove', params, (error, payload) => {

		    if (error) {
				// TODO Add error handling
				console.log('Error: ', error);
				return;
		    } else {
				dispatch({ type: 'REMOVE_PROJECT', payload });
		    }
		});
	};
}
import { Meteor } from 'meteor/meteor';
import Projects from '../../collections/projects';

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

export function loadProjects() {
    return dispatch => {
        Tracker.autorun(() =>{

			Meteor.subscribe('projects');

			dispatch({
				type: 'FETCH_PROJECTS',
				payload: Projects.find().fetch() ? Projects.find().fetch() : []
			});
		});
	}
}
import { Meteor } from 'meteor/meteor';
import Projects from '../../collections/projects';

export function addProject(params) {
	return dispatch => {
		// Prevent users not logged in making a project
    if (!Meteor.user()) {
      dispatch({ 
        type: 'ADD_PROJECT_ERROR',
        payload: 'You must be logged in to add a project'
      })
    } else {
      Meteor.call('projects.insert', params, (error, payload) => {
  		    if (error) {
  				  console.log('Add project error: ', error);
            dispatch({
              type: 'ADD_PROJECT_ERROR',
              payload: error.reason
            })
          } else {
            console.log('Project added successfully');
            dispatch({
              type: 'ADD_PROJECT',
              payload: Projects.find().fetch() ? Projects.find().fetch() : []
            })
  		    }
  		});
    }
	};
}

export function removeProject(params) {
	return dispatch => {
		Meteor.call('projects.remove', params, (error, payload) => {
	    if (error) {
			  // TODO Add error handling
			  console.log('Error: ', error);
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
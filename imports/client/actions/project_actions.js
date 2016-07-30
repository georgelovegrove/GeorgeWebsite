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
            dispatch({
              type: 'ADD_PROJECT_ERROR',
              payload: error.reason
            })
          } else {
            dispatch({
              type: 'ADD_PROJECT',
              payload: Projects.find().fetch() ? Projects.find().fetch() : []
            })
  		    }
  		});
    }
	};
}

export function removeProject(projectList, projectIndex) {

  const projectUserID = projectList[projectIndex].owner;
  const projectID = projectList[projectIndex]._id;

  return dispatch => {
    // Check the user owns the project post
    if (Meteor.userId() === projectUserID) {
      Meteor.call('projects.remove', projectID, (error, payload) => {
        if (error) {
          dispatch({
            type: 'REMOVE_PROJECT_ERROR',
            payload: error.reason
          })
        } else {
          dispatch({
            type: 'REMOVE_PROJECT',
            payload: [ ...projectList.slice(0, projectIndex), ...projectList.slice(projectIndex + 1) ]
          })
        }
      });
    } else {
      dispatch({
        type: 'REMOVE_PROJECT_ERROR',
        payload: 'You can only remove projects you own'
      })
    }
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
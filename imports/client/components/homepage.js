import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import ProjectList from './project_list';
import { userLogout } from '../actions/user_actions';
import { loadProjects, removeProject } from '../actions/project_actions';



class Homepage extends Component {

	addProject() {

		browserHistory.push('/addproject');
	}

	onRemoveProject(params) {

		console.log('user ID', this.props.userData.user);
		console.log('Projects ', this.props.projectsData.projects);
		console.log('Reamining params ', params);
	}

	render() {

		console.log('Homepage props ', this.props);

		const { projectsData, userData, userLogout } = this.props;

		let removeProjectError;
		if (projectsData) {
			removeProjectError = projectsData.errorMessage ? <div>{projectsData.errorMessage}</div> : '';
		}

		// TODO Input type needs cleaning up and should show nothing when logged out
		const loggedIn = (userData.user) ?  
			<div><button value="Logout" type="submit" className="btn btn-primary" onClick={userLogout}>Logout</button>
			<button value="Logout" type="submit" className="btn btn-primary" onClick={this.addProject}>Add project</button></div>
			: "No user logged in";

		return (
			<div>
				<div> Homepage header </div>
				{ loggedIn }
				{ removeProjectError }
				{ this.props.projectsData ? <ProjectList projects={projectsData.projects} loggedIn={userData.user ? true : false} removeProject={() => this.onRemoveProject.bind(this)}/> : '' }
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { projectsData: state.projectsData, userData: state.userData };
};

export default connect(mapStateToProps, { userLogout, loadProjects, removeProject })(Homepage);
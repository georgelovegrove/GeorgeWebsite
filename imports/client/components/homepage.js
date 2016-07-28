import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import ProjectList from './project_list';
import { userLogout } from '../actions/user_actions';
import { loadProjects } from '../actions/project_actions';

class Homepage extends Component {

	onLogout() {

		this.props.userLogout();
	}

	addProject() {

		browserHistory.push('/addproject');
	}

	render() {

		console.log('Homepage props ', this.props);

		let removeProjectError;
		if (this.props.projectsData) {
			removeProjectError = this.props.projectsData.errorMessage ? <div>{this.props.projectsData.errorMessage}</div> : '';
		}

		// TODO Input type needs cleaning up and should show nothing when logged out
		const loggedIn = (this.props.userData.user) ?  
			<div><button value="Logout" type="submit" className="btn btn-primary" onClick={this.onLogout.bind(this)}>Logout</button>
			<button value="Logout" type="submit" className="btn btn-primary" onClick={this.addProject}>Add project</button></div>
			: "No user logged in";

		return (
			<div>
				<div> Homepage header </div>
				{ loggedIn }
				{ removeProjectError }
				{ this.props.projectsData ? <ProjectList projects={this.props.projectsData.projects}/> : '' }
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { projectsData: state.projectsData, userData: state.userData };
};

export default connect(mapStateToProps, { userLogout, loadProjects })(Homepage);
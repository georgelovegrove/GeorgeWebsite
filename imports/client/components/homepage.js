import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import ProjectList from './project_list';
import { userLogout } from '../actions/user_actions';

class Homepage extends Component {

	onLogout(event) {
		event.preventDefault();

		this.props.userLogout();
	}

	render() {

		console.log('homepage props ', this.props);

		// TODO Input needs cleaning up and should show nothing when logged out
		const loggedIn = (this.props.meteorUser) ? <input value="Logout" type="submit" className="btn btn-primary" onClick={this.onLogout.bind(this)} /> : "No user logged in";

		return (
			<div>
				<div> Homepage header </div>
				<ProjectList />
				{ loggedIn }

			</div>
		);
	}
}

const mapStateToProps = state => {
	return { projects: state.projects, user: state.user };
};

export default connect(mapStateToProps, { userLogout })(Homepage);
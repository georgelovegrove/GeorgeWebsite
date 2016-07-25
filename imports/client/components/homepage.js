import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import ProjectList from './project_list';

class Homepage extends Component {

	onLogout(event) {
		event.preventDefault();

		Meteor.logout((er)=>{
			if(er) {
				// TODO Add error handling
				console.log('Failed to logout');
			} else {
				console.log('User logged out');
				// TODO Ensure state is automatically updated and relevant fields don't appear
			}
		});
	}

	render() {

		// TODO Input needs cleaning up and should show nothing when logged out
		const loggedIn = (Meteor.user()) ? <input value="Logout" type="submit" className="btn btn-primary" onClick={this.onLogout} /> : "No user logged in";

		return (
			<div>
				<div> Homepage header </div>
				<ProjectList />
				{ loggedIn }

			</div>
		);
	}
}

export default createContainer(() => {
	return {
		user: Meteor.user(),
	}
}, Homepage);
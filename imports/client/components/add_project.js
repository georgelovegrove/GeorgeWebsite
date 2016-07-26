import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import PageHeader from './page_header';



class AddProject extends Component {

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

	onSubmit(event) {
		event.preventDefault();

		const element = $(event.target);

		const project_title = element.find("#project_title").val();
		const tech_used = element.find("#tech_used").val();
		const project_url = element.find("#project_url").val();
		const date_posted = element.find("#date_posted").val();
		const project_image = element.find("#project_image").val();
		const project_description = element.find("#project_description").val();

		/*
		console.log('Project title: ', project_title);
		console.log('Tech used: ', tech_used);
		console.log('URL: ', project_url);
		console.log('Date posted: ', date_posted);
		console.log('Image: ', project_image);
		console.log('Project Description: ', project_description);
		*/

		
	}

	render() {

		// TODO Input needs cleaning up and should show nothing when logged out
		const loggedIn = (Meteor.user()) ? <input value="Logout" type="submit" className="btn btn-primary" onClick={this.onLogout} /> : "No user logged in";

		return (
			<div>
				<PageHeader />
				{ loggedIn }
				<h4 className="text-center">Add new project</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_title">Email</label>
							<input id="project_title" type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="tech_used">Technologies used</label>
							<input id="tech_used" type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_url">Relative project URL</label>
							<input id="project_url" type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="date_posted">Date posted</label>
							<input id="date_posted" type="text" className="validate" />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_image">Project image</label>
							<input id="project_image" type="text" className="validate" />
						</div>
					</div>	
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_description">Short project description</label>
							<input id="project_description" type="text" className="validate" />
						</div>
					</div>														
					<div className="row">
						<button type="submit" className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default createContainer(() => {
	// If user is not logged in redirect to homepage
	if (Meteor.user() === null) {
		browserHistory.push('/');
	}

	return {
		user: Meteor.user(),
	}
}, AddProject);
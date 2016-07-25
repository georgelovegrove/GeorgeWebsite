import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';



class Login extends Component {

	onSubmit(event) {
		event.preventDefault();

		const element = $(event.target);
		const email = element.find("#email").val();
		const password = element.find("#password").val();

		// Login user
		Meteor.loginWithPassword(email, password, (error)=>{
			if(error) {
				console.log('Error logging in: ', error);
				// TODO Add error handling to show user when input is wrong
			}
		});
	}

	render() {
		return (
			<div className="row">
				<h4 className="text-center">Login</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="text" className="validate" />
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate" />
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default createContainer(() => {
	// If user is logged in redirect to homepage
	if (Meteor.user()) {
		browserHistory.push('/');
	}

	return {
		user: Meteor.user(),
	}
}, Login);
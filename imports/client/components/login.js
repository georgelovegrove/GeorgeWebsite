import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';

import { userLogin } from '../actions/user_actions';



class Login extends Component {

	componentDidUpdate() {

		// TODO Need to find a way to better check whether a user is logged in before an initial page renders, React router onEnter perhaps?

		// When the page updates if they are logged in then redirect them
		if (this.props.userData.user) {

			browserHistory.push('/');
		}
	}

	render() {

		console.log('Login render props ', this.props);

		const { fields: { email , password }, handleSubmit, userLogin, userData } = this.props;

		return (
			<div className="row">	
				<h4 className="text-center">Login</h4>
				<form onSubmit={handleSubmit(userLogin)} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<input type="text" className="validate" {...email}/>
							<label htmlFor="email">Email</label>
						</div>
						<div> { email.touched ? email.error : ''} </div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input type="password" className="validate" {...password} />
							<label htmlFor="password">Password</label>
						</div>
						<div> { password.touched ? password.error : ''} </div>
					</div>
					<div className="row">
						<div>{ userData.errorMessage ? userData.errorMessage : '' }</div>
						<button className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.email) {	errors.email = 'Enter an email address';	}
	if (!values.password) {	errors.password = 'Enter a password';	}

	// TODO More validation checks

	return errors;
}

const mapStateToProps = state => {
	return { userData: state.userData };
};

export default reduxForm({
	fields: ['email', 'password'],
	form: 'LoginForm',
	validate
}, mapStateToProps, { userLogin })(Login);
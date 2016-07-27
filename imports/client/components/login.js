import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';

import { userLogin } from '../actions/user_actions';



class Login extends Component {

	componentWillMount() {

		// When user accesses page redirect if they are logged in before rendering
		if (this.props.user) {
			browserHistory.push('/');
		}
	}

	render() {

		// TODO Need to research redirect after ReduxForm submission
		if (this.props.user) {
			browserHistory.push('/');
		}

		const { fields: { email , password }, handleSubmit } = this.props;

		return (
			<div className="row">	
				<h4 className="text-center">Login</h4>
				<form onSubmit={handleSubmit(this.props.userLogin)} className="col offset-s4 s4">
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

	return errors;
}

const mapStateToProps = state => {
	return { user: state.user };
};

/* Not needed
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ userLogin }, dispatch);
};
*/

export default reduxForm({
	fields: ['email', 'password'],
	form: 'LoginForm',
	validate
}, mapStateToProps, { userLogin })(Login);
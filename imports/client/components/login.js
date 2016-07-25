import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';



class Login extends Component {
	
	componentDidMount() {

		this.view = Blaze.render(Template.loginButtons, 
			ReactDOM.findDOMNode(this.refs.logincontainer));
	}

	componentWillUnmount() {

		Blaze.remove(this.view);
	}

	render() {
		return (
			<div>
				<div ref="logincontainer"></div>
			</div>
		);
	}
}

export default Login;
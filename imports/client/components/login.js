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
      <div className="container">

        <div className="row">
          <div className="col-xs-12 text-center">
            <img className="profile_image" src="/images/george_profile.jpg" />
          </div>
          <div className="col-xs-12 text-center">
            <h3 className="login_title">Admin login</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 text-center">
            <form onSubmit={handleSubmit(userLogin)}>
              <div className="form-group">

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 text-center">
                    <input type="text" className="form-control validate text-center" placeholder="Email" {...email}/>
                    <div> { email.touched ? email.error : ''} </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1  text-center">
                    <input type="password" className="form-control validate text-center" placeholder="Password" {...password} />
                    <div> { password.touched ? password.error : ''} </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1  text-center">
                    <div>{ userData.errorMessage ? userData.errorMessage : '' }</div>
                    <button className="main_button btn btn-block">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {	errors.email = 'Enter an email address';	}
  if (!values.password) {	errors.password = 'Enter a password';	}

  // Only check for a valid email address if one is actually provided
  // if (!errors.email && TODO VALDATE EMAIL) { errors.email = 'Enter a valid email address';}

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
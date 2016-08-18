import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';

import { userChangePassword, resetUserRedirect } from '../actions/user_actions';



class ChangePassword extends Component {


  componentDidUpdate() {

    // When the page updates if redirect is true
    if (this.props.userData.redirectUser) {
      browserHistory.push('/');
    }
  }

  componentWillUnmount() {
    // Reset redirect back to false if it was changed
    this.props.resetUserRedirect();
  }

  render() {

    console.log('Change password render props ', this.props);

    const { fields: { oldPassword , newPassword, newPasswordCheck }, handleSubmit, userChangePassword, userData } = this.props;

    return (
      <div className="container">

        <div className="row">
          <div className="col-xs-12 text-center">
            <img className="profile_image" src="/general/george_profile.jpg" />
          </div>
          <div className="col-xs-12 text-center">
            <h3 className="login_title">Change password</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 text-center">
            <form onSubmit={handleSubmit(userChangePassword)}>
              <div className="form-group">

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 text-center">
                    <input type="password" className="form-control validate text-center" placeholder="Old password" {...oldPassword}/>
                    <div> { oldPassword.touched ? oldPassword.error : ''} </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1  text-center">
                    <input type="password" className="form-control validate text-center" placeholder="New password" {...newPassword} />
                    <div> { newPassword.touched ? newPassword.error : ''} </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1  text-center">
                    <input type="password" className="form-control validate text-center" placeholder="Retype new password" {...newPasswordCheck} />
                    <div> { newPasswordCheck.touched ? newPasswordCheck.error : ''} </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1  text-center">
                    <div>{ userData.errorMessage ? userData.errorMessage : '' }</div>
                    <button className="main_button btn btn-block">Change password</button>
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

  if (!values.oldPassword) {	errors.oldPassword = 'Enter your current password.';	}
  if (!values.newPassword) {	errors.newPassword = 'Enter a new password.';	}
  if (!values.newPasswordCheck) {  errors.newPasswordCheck = 'Enter a new password.'; }

  if (values.newPassword && values.newPasswordCheck) {

    if (values.newPassword !== values.newPasswordCheck) { errors.newPasswordCheck = 'Passwords don\'t match'; }
  }

  return errors;
}

const mapStateToProps = state => {
  return { userData: state.userData };
};

export default reduxForm({
  fields: ['oldPassword', 'newPassword', 'newPasswordCheck'],
  form: 'ChangePasswordForm',
  validate
}, mapStateToProps, { userChangePassword, resetUserRedirect })(ChangePassword);
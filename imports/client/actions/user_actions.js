import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Accounts } from 'meteor/accounts-base';

export function loadUser() {
  return dispatch => {
    Tracker.autorun(() =>{
      dispatch({
        type: 'USER_DATA',
        user: Meteor.user() ? Meteor.userId() : null,
        redirect: false
      });
    });
  }
}

export function userLogin(props) {
  return dispatch => {
    Meteor.loginWithPassword(props.email, props.password, (error)=>{
      if(error) {
        console.log('Error logging in: ', error);
        dispatch({
          type: 'USER_LOGIN_FAILED',
          error: error.reason
        })
      } else {
        console.log('User logged in');
        dispatch({
          type: 'USER_LOGGED_IN',
          user: Meteor.user()
        })
      }
    });
  }
}

export function userLogout() {
  return dispatch => {
    Meteor.logout((error)=>{
      if(error) {
        console.log('Error logging out: ', error);
        dispatch({
          type: 'USER_LOGOUT_FAILED',
          error: error.reason
        })
      } else {
        console.log('User logged out');
        dispatch({
          type: 'USER_LOGGED_OUT',
          payload: null
        })
      }
    });
  }
}

export function userChangePassword(props) {
  return dispatch => {
    Accounts.changePassword(props.oldPassword, props.newPassword,  (error)=>{
      if(error) {
        console.log('Error changing password: ', error);
        dispatch({
          type: 'USER_CHANGE_PASSWORD_FAILED',
          error: error.reason,
          redirect: false
        })
      } else {
        console.log('User changed password');
        dispatch({
          type: 'USER_CHANGE_PASSWORD',
          redirect: true
        })
      }
    });
  }
}

export function resetUserRedirect() {
  return dispatch => {
    dispatch({
      type: 'RESET_REDIRECT',
      redirect: false
    }); 
  }
}
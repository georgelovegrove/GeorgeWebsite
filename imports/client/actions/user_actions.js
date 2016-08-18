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
      dispatch({
        type: 'USER_LOGIN',
        user: Meteor.user(),
        error: error ? error.reason : null
      })
    });
  }
}

export function userLogout() {
  return dispatch => {
    Meteor.logout((error)=>{
      dispatch({
        type: 'USER_LOGOUT',
        user: error ? Meteor.userId() : null,
        error: error ? error.reason : null
      })
    });
  }
}

export function userChangePassword(props) {
  return dispatch => {
    Accounts.changePassword(props.oldPassword, props.newPassword,  (error)=>{
      dispatch({
        type: 'USER_CHANGE_PASSWORD',
        redirect: error ? false : true,
        error: error ? error.reason : null
      })
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
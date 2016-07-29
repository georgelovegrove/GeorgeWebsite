import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export function userLogout() {
  return dispatch => {
    Meteor.logout((error)=>{
      if(error) {
        console.log('Error logging out: ', error);
        dispatch({
          type: 'USER_LOGOUT_FAILED',
          payload: error.reason
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

export function userLogin(props) {
  return dispatch => {
    Meteor.loginWithPassword(props.email, props.password, (error)=>{
      if(error) {
        console.log('Error logging in: ', error);
        dispatch({
          type: 'USER_LOGIN_FAILED',
          payload: error.reason
        })
      } else {
       console.log('User logged in');
       dispatch({
         type: 'USER_LOGGED_IN',
         payload: Meteor.user()
       })
      }
    });
  }
};

export function loadUser() {
  return dispatch => {
    Tracker.autorun(() =>{
      dispatch({
        type: 'USER_DATA',
        payload: Meteor.user() ? Meteor.userId() : null
      });
    });
  }
}
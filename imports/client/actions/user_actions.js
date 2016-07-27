import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export function userLogout() {
	return () => {
		Meteor.logout((error)=>{
			if(error) {
				// TODO Add error handling
				console.log('Error logging out: ', error);
			} else {
				console.log('User logged out');
			}
		});
	}
}

export function userLogin(props) {
	return () => {
		Meteor.loginWithPassword(props.email, props.password, (error)=>{
			if(error) {
				console.log('Error logging in: ', error);
				// TODO Add error handling to show user when input is wrong
			}
			console.log('User logged in');
		});
	}
};

export function loadUser() {
    return dispatch => {
        Tracker.autorun(() =>{
            dispatch({
                type: 'USER_DATA',
                payload: Meteor.user() ? Meteor.user() : null
            });
        });
    }
}
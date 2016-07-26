import { Meteor } from 'meteor/meteor';

export function userLogout() {
	return () => {
		Meteor.logout((er)=>{
			if(er) {
				// TODO Add error handling
				console.log('Failed to logout');
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
			// TODO Add error handling to show user when input is wrong, dispatch shit
			}
			// ELSE dispatch user logged in with user details for state
			console.log('User logged in');
		});
	}
};
import { Meteor } from 'meteor/meteor';

// User actions are side effects. The account system domain state is not integrated into Redux state, 
// instead access to Meteor.user() is achieved through react-meteor-data containers.

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
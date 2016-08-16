import { Meteor } from 'meteor/meteor';

import './publications';
import './methods';



Meteor.startup(() => {

	/*
		This username and password is currently the login for the real website - www.georgelovegrove.com
		You're welcome to have a play! I will be replacing it eventually with two user accounts - my own and a test account.
		My account will have posts that actually show on the page where as a test account can use all the functionality yet cannot
		remove other users posts and their posts are also not public.
	*/

	if (Meteor.users.find().count() === 0) {
	    Accounts.createUser({
	        email: 'lovegrovegeorge@gmail.com',
	        password: 'password'
	    });
	}
});

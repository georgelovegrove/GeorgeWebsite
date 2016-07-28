import { Meteor } from 'meteor/meteor';

import './publications';
import './methods';

Meteor.startup(() => {

	// Add default admin account if none exist
	if (Meteor.users.find().count() === 0) {
	    Accounts.createUser({
	        email: 'lovegrovegeorge@gmail.com',
	        password: 'password'
	    });
	}

});

import { Meteor } from 'meteor/meteor';

import Projects from '../imports/collections/projects';



Meteor.methods({

	'projects.insert': function(params) {
		
		console.log('Params: ', params);

		if(!params.text) {
			console.log('Throw an error');
		}

		// Insert based on params
		Projects.insert({

			userId: this.userId
		})

		/* Data for project insertions
		- project name
		- technologies used
		- short description
		- image link
		- date posted
		- relative project url
		- userID (who owns it) */
	}
})
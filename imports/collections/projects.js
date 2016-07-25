import { Mongo } from 'meteor/mongo';

Meteor.methods({

	'projects.insert': function() {
		return Projects.insert({

			userId: this.userId
		})
	}
})

export const Projects = new Mongo.Collection('projects');

/*

- project name
- technologies used
- short description
- image link
- date posted
- relative project url
- userID (who owns it)

*/
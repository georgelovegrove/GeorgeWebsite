import { Meteor } from 'meteor/meteor';

import Projects from '../imports/collections/projects';



Meteor.methods({

	'projects.insert': function(params) {
				
		const projectID = Projects.insert({
			owner: Meteor.userId(),
			project_title: params.project_title,
			tech_used: params.tech_used,
			date_posted: params.date_posted,
			project_url: params.project_url,
			project_image: params.project_image,
			project_description: params.project_description
		});

		return Projects.find({ _id: projectID }).fetch();;
	}


});


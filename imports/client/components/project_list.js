import React, { Component } from 'react';

import ProjectItem from './project_item';

class ProjectList extends Component {

	render() {

		const projectItems = this.props.projects.map(project => 
			<ProjectItem 
				key={project._id}
				project_title={project.project_title} 
				tech_used={project.tech_used} 
				project_url={project.project_url} 
				date_posted={project.date_posted} 
				project_image={project.project_image} 
				project_description={project.project_description}/> );

		return (
			<div>
				<div> List of projects</div><br/>
				{ projectItems }
			</div>
		);
	}
}

export default ProjectList;

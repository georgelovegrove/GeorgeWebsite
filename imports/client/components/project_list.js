import React, { Component } from 'react';

import ProjectItem from './project_item';

class ProjectList extends Component {

	render() {

		const projectItems = this.props.projects.map((props, index) => 
			<ProjectItem {...props} index={index} /> );

		return (
			<div>
				<div> List of projects</div><br/>
				{ projectItems }
			</div>
		);
	}
}

export default ProjectList;
import React, { Component } from 'react';

import ProjectItem from './project_item';

// Trying to get callback function to work correctly

const ProjectList = ({ projects, removeProject, loggedIn }) => (

	<div>
		<div> List of projects</div><br/>
    <button type="button" className="btn btn-primary" onClick={removeProject('test')}>Remove</button>

			{ projects.map((props, index) => 
        <ProjectItem key={props._id} {...props} loggedIn={loggedIn} removeProject={removeProject} index={index} /> )}
	</div>
)

export default ProjectList;
import React, { Component } from 'react';

import ProjectItem from './project_item';



const ProjectList = ({ projects, onRemoveProject, loggedIn }) => (

  <div>
    <div> List of projects</div><br/>

      { projects.map((props, index) => 
        <ProjectItem key={props._id} {...props} loggedIn={loggedIn} onRemoveProject={onRemoveProject} index={index} /> )}
  </div>
)

export default ProjectList;
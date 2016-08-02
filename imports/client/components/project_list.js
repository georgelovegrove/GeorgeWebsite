import React, { Component } from 'react';

import ProjectItem from './project_item';



const ProjectList = ({ projects, onRemoveProject, loggedIn, onViewProject }) => (

  <div>
      { projects.map((props, index) => 
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <ProjectItem key={props._id} {...props} onViewProject={onViewProject} loggedIn={loggedIn} onRemoveProject={onRemoveProject} index={index} />
          </div>
        </div>
      )}
  </div>
)

export default ProjectList;
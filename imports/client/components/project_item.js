import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { connect } from 'react-redux';



const ProjectItem = ({ _id, project_title, tech_used, project_url, date_posted, project_image, 
                      project_description, owner, index, onRemoveProject, loggedIn, onViewProject }) => (

  <div className="body_container">

    <div className="row">
      <div className="col-lg-3 col-md-4">

          <div className="body_inner_container text-center"> 
            <img className="project_image" src={project_image} />
          </div>
      </div>

      <div className="col-lg-9 col-md-8">

        <div className="row">
          <div className="col-sm-6 col-xs-12">

            <div className="project_title"><a onClick={onViewProject.bind(null, project_url)}>  { project_title } </a></div>
          </div>

          <div className="col-sm-6 col-xs-12 text-right">

            <div className="project_date"> Developed: { date_posted } </div>
            { loggedIn ? <img className="remove_cross" onClick={onRemoveProject} src="/general/cross.png" /> : '' }
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            
            <div className="project_tech"> Tech: { tech_used } </div>
          </div>
        </div>

        <div className="row">  
          <div className="col-xs-12">

            <div className="description_container">
              <div> { project_description } </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectItem;
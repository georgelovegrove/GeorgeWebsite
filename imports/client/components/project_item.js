import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { connect } from 'react-redux';



const ProjectItem = ({ _id, project_title, tech_used, project_url, date_posted, project_image, 
                        project_description, owner, index, onRemoveProject, loggedIn, onViewProject }) => (

  <div>
    <div onClick={onViewProject.bind(null, project_url)}> Project title: { project_title } </div>
    <div> Tech used: { tech_used } </div>
    <div> Project URL: { project_url } </div>
    <div> Date posted: { date_posted } </div>
    <div> Image URL: { project_image } </div>
    <div> Description: { project_description } </div>
    { loggedIn ? <button type="button" className="btn btn-primary" onClick={onRemoveProject.bind(null, index)}>Remove</button> : '' }
    <br/><br/><br/>
  </div>
)

export default ProjectItem;
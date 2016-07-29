import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { connect } from 'react-redux';



const ProjectItem = ({ _id, project_title, tech_used, project_url, date_posted, project_image, 
                        project_description, owner, index, removeProject, loggedIn }) => (

  <div>
    <div> Project title: { project_title } </div>
    <div> Tech used: { tech_used } </div>
    <div> Project URL: { project_url } </div>
    <div> Date posted: { date_posted } </div>
    <div> Image URL: { project_image } </div>
    <div> Description: { project_description } </div>
    <br/><br/><br/>
  </div>
)

export default ProjectItem;

/*
  remove button - { loggedIn ? <button type="button" className="btn btn-primary" onClick={removeProject( owner, _id, index )}>Remove</button> : '' }



Removed
const mapStateToProps = state => {
  return { userData: state.userData, projectsData : state.projectsData };
};

    { userID ? <button type="button" className="btn btn-primary" onClick={removeProject({ userID: owner, projectID: _id }, projects, index)}>Remove</button> : '' }

export default connect(mapStateToProps, { removeProject })(ProjectItem);
*/
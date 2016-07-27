import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {

    const projectItem = this.props;

    return (
      <div>
        <div> Project title: { projectItem.project_title } </div>
        <div> Tech used: { projectItem.tech_used } </div>
        <div> Date posted: { projectItem.date_posted } </div>
        <div> Image URL: { projectItem.project_image } </div>
        <div> Description: { projectItem.project_description } </div>      
        <br/>
      </div>
    );
  }
}

export default ProjectItem;
import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {

    const item = this.props;

    return (
      <div>
        <div> Project title: { item.project_title } </div>
        <div> Tech used: { item.tech_used } </div>
        <div> Project URL: { item.project_url } </div>
        <div> Date posted: { item.date_posted } </div>
        <div> Image URL: { item.project_image } </div>
        <div> Description: { item.project_description } </div>
        <br/>
      </div>
    );
  }
}

export default ProjectItem;
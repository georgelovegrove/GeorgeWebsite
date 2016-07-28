import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeProject } from '../actions/project_actions';

class ProjectItem extends Component {

  onRemove() {

    const { props } = this;
    const project = { userID: props.owner, projectID: props._id };

    props.removeProject(project, props.projectsData.projects, props.index);
  }

  render() {

    console.log('Project item props ', this.props);

    const { _id, project_title, tech_used, project_url, date_posted, project_image, project_description, userData } = this.props;

    const removeProjectButton = userData.user ? <button type="button" className="btn btn-primary" onClick={this.onRemove.bind(this)}>Remove</button> : '';

    return (
      <div>
        <div> Project title: { project_title } </div>
        <div> Tech used: { tech_used } </div>
        <div> Project URL: { project_url } </div>
        <div> Date posted: { date_posted } </div>
        <div> Image URL: { project_image } </div>
        <div> Description: { project_description } </div>
        { removeProjectButton }
        <br/><br/><br/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userData: state.userData, projectsData : state.projectsData };
};

export default connect(mapStateToProps, { removeProject })(ProjectItem);
import React, { Component } from 'react';

import PageHeader from '../page_header';
import InvalidProject from './invalid_project';

// Available projects 
import SetupWebsite from './setupwebsite';



class Project extends Component {

  // When adding new project, add a switch case to here
  selectProject(projectName) {

    switch (projectName) {
      case 'setupwebsite':
        return <SetupWebsite />
      default:
        return <InvalidProject />
    }
  }

  // TODO develop selected project state to allow page to know which project is currently selected

  render() {
    return (
      <div className="container">

        <PageHeader userData={null} dateDeveloped={null} onLogout={null} />

        { this.selectProject(this.props.params.projectName) }
      </div>
    );
  }
}

export default Project;
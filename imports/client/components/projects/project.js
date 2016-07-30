import React, { Component } from 'react';

import PageHeader from '../page_header';

// Projects
import SetupWebsite from './setupwebsite';



class Project extends Component {


  selectProject(projectName) {


    console.log('Given param: ', projectName);

    switch (projectName) {
      case 'setupwebsite':
        return <SetupWebsite />
      default:
        return <div>Please provide a valid project name in the URL</div>
    }
  }

  render() {

    console.log('Project props: ', this.props);

    return (
      <div className="container">
        <PageHeader />
        { this.selectProject(this.props.params.projectName) }
      </div>
    );
  }
}

export default Project;
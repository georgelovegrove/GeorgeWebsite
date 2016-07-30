import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import ProjectList from './project_list';
import { userLogout } from '../actions/user_actions';
import { loadProjects, removeProject } from '../actions/project_actions';



class Homepage extends Component {

  addProject() {
    browserHistory.push('/addproject');
  }

  onLogin() {
    browserHistory.push('/login'); 
  }

  onRemoveProject(index) {
    this.props.removeProject(this.props.projectsData.projects, index);
  }

  onViewProject(projectName) {
    browserHistory.push(`/project/${projectName}`); 
  }

  render() {

    console.log('Homepage props ', this.props);

    const { projectsData, userData, userLogout } = this.props;

    let removeProjectError;
    if (projectsData) {
      removeProjectError = projectsData.errorMessage ? <div>{projectsData.errorMessage}</div> : '';
    }

    // TODO Input type needs cleaning up and should show nothing when logged out
    const loggedIn = (userData.user) ?  
      <div><button value="Logout" type="submit" className="btn btn-primary" onClick={userLogout}>Logout</button>
      <button value="Logout" type="submit" className="btn btn-primary" onClick={this.addProject}>Add project</button></div>
      : <button value="Login" type="submit" className="btn btn-primary" onClick={this.onLogin}>Login</button>;

    // Access images straight through images folder
    //<img src="/images/george_profile.jpg" />

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            Homepage header 
          </div>
          <div className="col-sm-4">
            { loggedIn }
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12"> 
            { removeProjectError } 
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            { projectsData ? <ProjectList projects={projectsData.projects} loggedIn={userData.user ? true : false} onViewProject={this.onViewProject} onRemoveProject={this.onRemoveProject.bind(this)}/> : '' }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { projectsData: state.projectsData, userData: state.userData };
};

export default connect(mapStateToProps, { userLogout, loadProjects, removeProject })(Homepage);
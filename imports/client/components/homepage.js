import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import ProjectList from './project_list';
import { userLogout } from '../actions/user_actions';
import { loadProjects, removeProject } from '../actions/project_actions';



class Homepage extends Component {

  onRemoveProject(index) {
    this.props.removeProject(this.props.projectsData.projects, index);
  }

  onViewProject(projectName) {
    browserHistory.push(`/project/${projectName}`); 
  }

  render() {

    console.log('Homepage props ', this.props);

    const { projectsData, userData, userLogout, removeProject } = this.props;

    return (
      <div className="container">

        <div className="row">  
          <div className="nav_container">
            <div className="col-sm-7 col-sm-offset-1 col-xs-12">

              <img className="homepage_image img-circle" src="/general/george_profile.jpg" />
              <h3 className="homepage_title">George Lovegrove</h3>
              <h4 className="homepage_subtitle">JavaScript Developer</h4>

              <div className="image_container">
                <div className="image_item"><a href="https://www.facebook.com/glovegrove" target="_blank">
                                              <img className="homepage_icon" src="/general/facebook.png" /></a></div>
                <div className="image_item"><a href="https://www.github.com/georgelovegrove" target="_blank">
                                              <img className="homepage_icon" src="/general/github.png" /></a></div>
                <div className="image_item"><a href="https://uk.linkedin.com/in/georgelovegrove" target="_blank">
                                              <img className="homepage_icon" src="/general/linkedin.png" /></a></div>
                <div className="image_item"><a href="https://medium.com/@georgelovegrove" target="_blank">
                                              <img className="homepage_icon" src="/general/medium.png" /></a></div>
                <div className="image_item"><a href="https://angel.co/glovegrove" target="_blank">
                                              <img className="homepage_icon" src="/general/angellist.png" /></a></div>
              </div>
            </div>

            <div className="col-sm-3 col-sm-offset-0 col-xs-6 col-xs-offset-3">
              <div className="text-center">

                { userData.user ?  
                  <div><button value="Logout" type="submit" className="homepage_nav_button homepage_logout btn btn-block" onClick={userLogout}>Logout</button>
                        <button value="Logout" type="submit" className="homepage_nav_button homepage_addproject btn btn-block" onClick={() => browserHistory.push('/addproject')}>Add project</button></div> 
                  : <button value="Login" type="submit" className="homepage_nav_button homepage_login btn btn-block" onClick={() => browserHistory.push('/login')}>Login</button> }
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="page_title_header">
              <h3 className="page_title">Personal projects</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 col-sm-offset-1"> 
            { projectsData && projectsData.errorMessage ? <div>{projectsData.errorMessage}</div> : '' } 
          </div>
        </div>

        { projectsData ? <ProjectList projects={projectsData.projects} loggedIn={userData.user ? true : false} onViewProject={this.onViewProject} onRemoveProject={this.onRemoveProject.bind(this)}/> : '' }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return { projectsData: state.projectsData, userData: state.userData };
};

export default connect(mapStateToProps, { userLogout, loadProjects, removeProject })(Homepage);
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';

import { userLogout } from '../actions/user_actions';
import { addProject } from '../actions/project_actions';
import PageHeader from './page_header';

class AddProject extends Component {

  // TODO Need to find a good way to redirect for when a user is not logged in, React router onEnter perhaps

  onLogout() {
    this.props.userLogout();
  }

  onSubmit(props) {
    event.preventDefault();

    this.props.addProject(props);
  }

  componentDidUpdate() {

    // When the page updates if they have submitted a form successfully they should be redirected
    if (this.props.projectsData.redirectUser) {
      browserHistory.push('/');
    }
  }

  render() {

    // TODO Input needs cleaning up and should show nothing when logged out
    const loggedIn = (this.props.userData.user) ? <button className="nav_button btn btn-block" onClick={this.onLogout.bind(this)}>Logout</button> : '';

    const { fields: { project_title, tech_used, project_url, date_posted, project_image, project_description }, handleSubmit, projectsData } = this.props;

    // TODO finish login conditional styling and then export this into page_header.js
    // Look into bootstarp hidden in alpha 4 vesion

    return (
      <div className="container">

        <div className="row">
          <div className="nav_container">
            <div className="col-sm-7 col-sm-offset-1">

              <img className="nav_image" src="/images/george_profile.jpg" />
              <h3 className="nav_title">George Lovegrove</h3>
            </div>

            <div className="col-sm-3">
              <div className="">
                { loggedIn }
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="page_title_header">
              <h3 className="page_title">Add new project</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-group">

            <div className="col-sm-10 col-sm-offset-1 text-center">
              <input type="text" className="form-control validate text-center" placeholder="Project title" {...project_title}/>
              <div> { project_title.touched ? project_title.error : ''} </div>
            </div>

            <div className="col-sm-10 col-sm-offset-1 text-center">
              <input type="text" className="form-control validate text-center" placeholder="Technologies used" {...tech_used}/>
              <div> { tech_used.touched ? tech_used.error : ''} </div>
            </div>

            <div className="col-sm-10 col-sm-offset-1 text-center">
              <input type="text" className="form-control validate text-center" placeholder="Relative project URL (e.g setupwebsite)" {...project_url}/>
              <div> { project_url.touched ? project_url.error : ''} </div>
            </div>

            <div className="col-sm-10 col-sm-offset-1 text-center">
              <input type="text" className="form-control validate text-center" placeholder="Date developed" {...date_posted}/>
              <div> { date_posted.touched ? date_posted.error : ''} </div>
            </div>

            <div className="col-sm-10 col-sm-offset-1 text-center">
              <input type="text" className="form-control validate text-center" placeholder="Project image relative URL" {...project_image}/>
              <div> { project_image.touched ? project_image.error : ''} </div>
            </div>

            <div className="col-sm-10 col-sm-offset-1 text-center">
              <input type="text" className="form-control validate text-center" placeholder="Short project description" {...project_description}/>
              <div> { project_description.touched ? project_description.error : ''} </div>
            </div>

            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
              <div>{ projectsData.errorMessage ? projectsData.errorMessage : '' }</div>
              <button className="main_button btn btn-block">Submit</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.project_title) {	errors.project_title = 'Enter a project title';	}
  if (!values.tech_used) {	errors.tech_used = 'Enter the technologies used';	}
  if (!values.project_url) {	errors.project_url = 'Enter the relative project URL';	}
  if (!values.date_posted) {	errors.date_posted = 'Enter the date the project was developed';	}
  if (!values.project_image) {	errors.project_image = 'Enter the project image relative URL';	}
  if (!values.project_description) {	errors.project_description = 'Enter a project description';	}

  // TODO Finish validation

  return errors;
}

const mapStateToProps = state => {
  return { projectsData: state.projectsData, userData: state.userData };
};

export default reduxForm({
  fields: ['project_title', 'tech_used', 'project_url', 'date_posted', 'project_image', 'project_description'],
  form: 'AddProjectForm',
  validate
}, mapStateToProps, { userLogout, addProject })(AddProject);
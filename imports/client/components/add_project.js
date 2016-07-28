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
		const loggedIn = (this.props.userData.user) ? <input value="Logout" type="submit" className="btn btn-primary" onClick={this.onLogout.bind(this)} /> : "No user logged in";

		const { fields: { project_title, tech_used, project_url, date_posted, project_image, project_description }, handleSubmit, projectsData } = this.props;

		return (
			<div>
				<PageHeader />
				{ loggedIn }
				<h4 className="text-center">Add new project</h4>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_title">Email</label>
							<input type="text" className="validate" {...project_title}/>
							<div> { project_title.touched ? project_title.error : ''} </div>	
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="tech_used">Technologies used</label>
							<input type="text" className="validate" {...tech_used}/>
							<div> { tech_used.touched ? tech_used.error : ''} </div>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_url">Relative project URL</label>
							<input type="text" className="validate" {...project_url}/>
							<div> { project_url.touched ? project_url.error : ''} </div>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="date_posted">Date posted</label>
							<input type="text" className="validate" {...date_posted}/>
							<div> { date_posted.touched ? date_posted.error : ''} </div>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_image">Project image</label>
							<input type="text" className="validate" {...project_image}/>
							<div> { project_image.touched ? project_image.error : ''} </div>
						</div>
					</div>	
					<div className="row">
						<div className="input-field col s12">
							<label htmlFor="project_description">Short project description</label>
							<input type="text" className="validate" {...project_description}/>
							<div> { project_description.touched ? project_description.error : ''} </div>
						</div>
					</div>														
					<div className="row">
						<div>{ projectsData.errorMessage ? projectsData.errorMessage : '' }</div>
						<button type="submit" className="waves-effect waves-light btn btn-block">Submit</button>
					</div>
				</form>
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
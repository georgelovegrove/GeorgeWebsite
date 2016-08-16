import React, { Component } from 'react';


const SetupWebsite = () => {

  return (
    <div>
      
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="page_title_header">
            <h3 className="page_title">Setup website</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="body_container">
            <div className="body_inner_container">
             
                <p>The purpose of this website was to learn how to use Redux in a Meteor and React application.</p>

                <p>The process of <a href='https://drive.google.com/folderview?id=0B8eUsSv3DhS6ZTJLN2VBcXdTWEE&usp=sharing'>designing</a> and <a href='https://docs.google.com/document/d/16jToKFgV-beYQUD_9a2z75bQMieD3t-LypEBiwklbWU/edit?usp=sharing'>architecting</a> the 
                  website, the code and also the remaining tasks to be completed (TODOs) can be found on 
                  the <a href='https://github.com/georgelovegrove/george-website'>github repository</a>.</p>


                <h4>Homepage</h4>

                <p>The homepage prints out a list of projects that have been developed. Admins can remove projects or navigate to an add project or login/logout sections.</p>

                <h5>Logged out view</h5>
                <img className="setupwebsite_screenshot" src="/projects/homepageloggedout.png" />

                <h5>Logged in view</h5>
                <img className="setupwebsite_screenshot" src="/projects/homepageloggedin.png" />


                <h4>Login</h4>

                <p>The login page is for an admin login to maintain and update the site.</p>

                <img className="setupwebsite_screenshot" src="/projects/login.png" />


                <h4>Add project</h4>

                <p>The add project page allows an admin to insert new projects. 
                A date picker and image uploader are still to be integrated to replace string inputs.</p>

                <img className="setupwebsite_screenshot" src="/projects/addproject.png" />


                <h4>Project page</h4>

                <p>A project page has simple header navigation to return to the homepage and then a container for the project content.</p>

                <img className="setupwebsite_screenshot" src="/projects/projectpage.png" />


                <h4>Lessons learnt and notes</h4>

                <ul>
                  <li>Design first and then before jumping into Redux it is beneficial to craft a JSON data object to visualise the state needed for each page of the project.
                  This will help ensure the stored state is minimal for each page.</li>
                </ul>

                <h4>Questions to answer</h4>

                <ul>
                  <li>What is the best way to use Meteors user account system with Redux? Currently the project uses Meteor's tracker to update
                  the state when Meteor.user() changes which doesn't feel like an optimal approach.</li>
                  <li>What ways could project information be added to a web editor that would allow for text and images with basic styling. 
                  The editor would need to save this data to MongoDB and would ultimately remove the need for static developed pages for each project.</li>
                </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SetupWebsite;
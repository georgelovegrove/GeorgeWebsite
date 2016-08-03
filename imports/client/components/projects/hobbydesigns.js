import React, { Component } from 'react';


const HobbyDesigns = () => {

  return (
    <div>
      
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="page_title_header">
            <h3 className="page_title">Hobby designs</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="project_container">
            <div className="project_inner_container">
             
                <p>For this project an assortment of icons were needed to represent each hobby. To cater 
                for this well over 100 icons were made for use in the application. A small selection is shown below. </p>

                <img className="hobby_icon_selection" src="/projects/iconselection.png" />

                <p>I designed the website and application from wireframe to final designs using Sketch. After design were completed
                I developed the website and lead the application design implementation using React Native. 
                An example screen for the website homepage is shown below.</p>

                <img className="hobby_homepage_image" src="/projects/websitehome.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default HobbyDesigns;
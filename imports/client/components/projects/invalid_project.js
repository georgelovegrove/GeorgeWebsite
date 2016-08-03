import React, { Component } from 'react';


const InvalidProject = () => {

  return (
    <div>
      
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="page_title_header">
            <h3 className="page_title">Unknown project URL</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <div className="project_container">
            <div className="project_inner_container">
             
                <div>Please use a valid project URL.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default InvalidProject;
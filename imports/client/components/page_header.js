import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const PageHeader = ({ userData, dateDeveloped, onLogout }) => {

  return (

    <div className="row">
      <div className="nav_container">
        <div className="col-sm-7 col-sm-offset-1 col-xs-12">

          <img onClick={() => browserHistory.push('/')} className="nav_image" src="/general/george_profile.jpg" />
          <h3 onClick={() => browserHistory.push('/')} className="nav_title">George Lovegrove</h3>
        </div>

        <div className="col-sm-3 col-sm-offset-0 col-xs-4 col-xs-offset-4">
          <div className="text-center">
            { (userData && userData.user) ? <button className="nav_button btn btn-block" onClick={onLogout}>Logout</button> : '' }
            { dateDeveloped ? <div>Developed: {dateDeveloped}</div> : '' }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
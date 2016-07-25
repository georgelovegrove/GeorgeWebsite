import React from 'react';
import ReactDOM from 'react-dom';

import Routes from '../imports/client/routes';

Meteor.startup(() => {
  ReactDOM.render(Routes, document.querySelector('.container'));
});
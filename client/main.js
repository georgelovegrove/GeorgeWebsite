import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import store from '../imports/client/store'; 



Meteor.startup(() => {
	ReactDOM.render(store, document.querySelector('.container'));
});
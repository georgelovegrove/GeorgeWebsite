import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import store from '../imports/client/store'; 
import routes from '../imports/client/routes';


Meteor.startup(() => {
	ReactDOM.render((
	    <Provider store={store()}>
	      	<Router history={browserHistory} routes={routes} />
	    </Provider>
	), document.querySelector('.container'));
});
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers/index';
import routes from './routes';



const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = (
	<Provider store={createStoreWithMiddleware(reducers)}>
  		<Router history={browserHistory} routes={routes} />
  	</Provider>
);

export default store;
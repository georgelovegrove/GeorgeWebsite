import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

// TODO apply middleware for logger etc when needed

//const createStoreWithMiddleware = applyMiddleware()(createStore);

export default () => {
	const store = createStore(reducers, applyMiddleware(thunk));

	return store;
};
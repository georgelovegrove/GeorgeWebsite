import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import projectsReducer from './projects_reducer';
import userReducer from './user_reducer';


export default combineReducers({

	user: userReducer,
	projects: projectsReducer,
	form: formReducer,
});
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import projectsReducer from './projects_reducer';



export default combineReducers({

	projects: projectsReducer,
	form: formReducer,
});
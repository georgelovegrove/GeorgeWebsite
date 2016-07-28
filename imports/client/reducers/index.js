import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import projectsReducer from './projects_reducer';
import userReducer from './user_reducer';


export default combineReducers({

	userData: userReducer,
	projectsData: projectsReducer,
	form: formReducer,
});
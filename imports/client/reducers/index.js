import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ProjectsReducer from './projects_reducer';

const index = combineReducers({

	projects: ProjectsReducer,
	form: formReducer,
});

export default index;
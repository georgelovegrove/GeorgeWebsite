const initialState = {

  errorMessage: null,
  redirectUser: false,
  projects: []
}

const projectsReducer = (state = initialState, action) => {

  //console.log('State: ', state);
  //console.log('Action: ', action);

  switch (action.type) {
  	case 'FETCH_PROJECTS':
  		return Object.assign({}, state, { projects: action.payload, errorMessage: null, redirectUser: false })
    case 'ADD_PROJECT':
      return Object.assign({}, state, { projects: action.payload, errorMessage: null, redirectUser: true })
    case 'ADD_PROJECT_ERROR':
      return Object.assign({}, state, { projects: [], errorMessage: action.payload, redirectUser: false })
  	case 'REMOVE_PROJECT':
  		return state; //state.filter(id => id !== action.payload);
    default:
    	return state;
  }
};

export default projectsReducer;
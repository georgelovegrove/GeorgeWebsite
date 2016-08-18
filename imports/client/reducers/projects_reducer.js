const initialState = {

  errorMessage: null,
  redirectUser: false,
  projects: []
}

const projectsReducer = (state = initialState, action) => {

  switch (action.type) {
  	case 'FETCH_PROJECTS':
  		return Object.assign({}, state, { projects: action.payload, errorMessage: null, redirectUser: false })
    case 'ADD_PROJECT':
      return Object.assign({}, state, { projects: action.payload, errorMessage: null, redirectUser: true })
    case 'ADD_PROJECT_ERROR':
      return Object.assign({}, state, { errorMessage: action.payload, redirectUser: false })
  	case 'REMOVE_PROJECT':
      return Object.assign({}, state, { projects: action.payload, errorMessage: null, redirectUser: false })
    case 'REMOVE_PROJECT_ERROR':
      return Object.assign({}, state, { errorMessage: action.payload, redirectUser: false })
    default:
    	return state;
  }
};

export default projectsReducer;
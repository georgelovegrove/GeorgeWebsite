// TODO Add constants for state in action creators, pass in correct action changes and update state with new state objects

const projectsReducer = (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_PROJECTS':
  		return state;
  	case 'ADD_PROJECT':
  		return state;
  	case 'REMOVE_PROJECT':
  		return state;
    default:
    	return state;
  }
};

export default projectsReducer;
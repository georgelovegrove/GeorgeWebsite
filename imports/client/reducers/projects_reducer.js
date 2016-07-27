// TODO Add constants for state in action creators, pass in correct action changes and update state with new state objects

const projectsReducer = (state = [], action) => {
  switch (action.type) {
  	case 'FETCH_PROJECTS':
  		return action.payload;
  	case 'REMOVE_PROJECT':
  		return state; //state.filter(id => id !== action.payload);
    default:
    	return state;
  }
};

export default projectsReducer;
const initialState = {

  errorMessage: null,
  user: null
}

const userReducer = (state = initialState, action) => {
  
 	//console.log('State: ', state);
	//console.log('Action: ', action);

	switch (action.type) {
		case 'USER_DATA':
			return Object.assign({}, state, { user: action.payload    })
		case 'USER_LOGGED_IN':
			return Object.assign({}, state, { user: action.payload, errorMessage: null })
		case 'USER_LOGIN_FAILED':
			return Object.assign({}, state, { errorMessage: action.payload })
    case 'USER_LOGGED_OUT':
      return initialState
    case 'USER_LOGOUT_FAILED':
      return Object.assign({}, state, { errorMessage: action.payload })
		default:
			return state;
	}
};

export default userReducer;



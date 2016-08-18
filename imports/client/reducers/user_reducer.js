const initialState = {

  errorMessage: null,
  redirectUser: false,
  user: null
}

const userReducer = (state = initialState, action) => {
  
	switch (action.type) {
		case 'USER_DATA':
			return Object.assign({}, state, { user: action.user })
		case 'USER_LOGIN':
			return Object.assign({}, state, { user: action.user, errorMessage: action.error })
    case 'USER_LOGOUT':
      return Object.assign({}, state, { user: action.user, errorMessage: action.error })
    case 'USER_CHANGE_PASSWORD':
      return Object.assign({}, state, { redirectUser: action.redirect, errorMessage: action.error })
		case 'RESET_REDIRECT':
      return Object.assign({}, state, { redirectUser: action.redirect })
    default:
			return state;
	}
};

export default userReducer;



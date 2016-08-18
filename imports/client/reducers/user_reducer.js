const initialState = {

  errorMessage: null,
  redirectUser: false,
  user: null
}

const userReducer = (state = initialState, action) => {
  
	switch (action.type) {
		case 'USER_DATA':
			return Object.assign({}, state, { user: action.user })
		case 'USER_LOGGED_IN':
			return Object.assign({}, state, { user: action.user, errorMessage: null })
		case 'USER_LOGIN_FAILED':
			return Object.assign({}, state, { errorMessage: action.error })
    case 'USER_LOGGED_OUT':
      return initialState
    case 'USER_LOGOUT_FAILED':
      return Object.assign({}, state, { errorMessage: action.error })
    case 'USER_CHANGE_PASSWORD':
      return Object.assign({}, state, { redirectUser: action.redirect })
    case 'USER_CHANGE_PASSWORD_FAILED':
      return Object.assign({}, state, { errorMessage: action.error, redirectUser: action.redirect })
		case 'RESET_REDIRECT':
      return Object.assign({}, state, { redirectUser: action.redirect })
    default:
			return state;
	}
};

export default userReducer;



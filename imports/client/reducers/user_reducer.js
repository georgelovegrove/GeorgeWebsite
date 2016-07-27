

const userReducer = (state = null, action) => {
  
 	//console.log('State: ', state);
	//console.log('Action: ', action);

	switch (action.type) {
		case 'USER_DATA':
			return action.payload;
		default:
			return state;
	}
};

export default userReducer;
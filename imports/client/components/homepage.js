import React, { Component } from 'react';

import ProjectList from './project_list';



class Homepage extends Component {

	render() {
		return (
			<div>
				<div> Homepage header </div>
				<ProjectList />
			</div>
		);
	}
}

export default Homepage;
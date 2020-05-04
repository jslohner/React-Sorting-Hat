import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<h1>Welcome to Hogwarts</h1>
				<Link to='/questions'>
					<button>Ready to be sorted?</button>
				</Link>
			</div>
		);
	}
}

export default HomePage;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage.js';
import QuestionsPage from './components/QuestionsPage.js';
import SortedPage from './components/SortedPage.js';

const sortingQuestions = [
	{
		id: 1,
		question: 'Which of these do you value most?',
		answers: {
			Bravery: false,
			Loyalty: false
		}
	},
	{
		id: 2,
		question: 'Which of these would describe you more accurately?',
		answers: {
			Intelligence: false,
			Ambition: false
		}
	},
	{
		id: 3,
		question: 'If you were an animal, which of these would you want to be?',
		answers: {
			Lion: false,
			Eagle: false
		}
	},
	{
		id: 4,
		question: 'Which of these animals do you like the most?',
		answers: {
			Badger: false,
			Snake: false
		}
	},
	{
		id: 5,
		question: 'Which of these elements describes you best?',
		answers: {
			fire: false,
			water: false
		}
	},
	{
		id: 6,
		question: 'Which of these elements describes you best?',
		answers: {
			earth: false,
			air: false
		}
	}
]

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sortingQuestions
		}
	}

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>

					<Route path='/questions'>
						<QuestionsPage sortingQuestions={this.state.sortingQuestions}/>
					</Route>

					<Route path='/sorted'>
						<SortedPage />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;

import React from 'react';

import Question from './Question.js';

class QuestionsPage extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.sortingQuestions.map(questionData => {
						return <Question key={questionData.id} questionData={questionData}/>
					})
				}
			</div>
		);
	}
}

export default QuestionsPage;

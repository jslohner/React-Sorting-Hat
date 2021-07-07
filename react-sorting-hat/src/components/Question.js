import React from 'react';

class Question extends React.Component {
	render() {
		return (
			<div>
				<h2>{this.props.questionData.question}</h2>
				{
					Object.keys(this.props.questionData.answers).map(answer => {
						return (
							<label key={`${answer} - ${this.props.questionData.id}`}>{answer} - <input type='checkbox' name='answer'/></label>
						);
					})
				}
			</div>
		);
	}
}

export default Question;

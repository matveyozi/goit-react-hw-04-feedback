import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

function Feedback() {

const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


	const onLeaveFeedback = e => {
		const { value } = e.target
		
		switch (value) {
			case 'good': setGood(prev=> prev+1);
				break;
			case 'neutral': setNeutral(prev => prev+1);
				break;
			case 'bad': setBad(prev => prev+1);
				break;
			default: break;
		}

		
		
	};

	const calculateTotal = () => {
		const totalResult = bad + good + neutral;
		return totalResult;
	};
	const calculatePositivePercentage = () => {
		let percentage = (good / calculateTotal()) * 100;
		return Number.parseInt(percentage);
	};
	


		return (
			<Container>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={['good', 'neutral', 'bad']}
						onLeaveFeedback={onLeaveFeedback}
					/>
				</Section>
				<Section title="Statistics">
					{calculateTotal() === 0 ? (
						<Notification message="There is no feedback" />
					) : (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={calculateTotal()}
							positivePercentage={calculatePositivePercentage()}
						></Statistics>
					)}
				</Section>
			</Container>
		);
	
}

Feedback.propTypes = {
	initialValueGood: PropTypes.number,
	initialValueNeutral: PropTypes.number,
	initialValueBad: PropTypes.number,
};
export default Feedback;


// class Feedback extends Component {




// 	static defaultProps = {
// 		initialValueGood: 0,
// 		initialValueNeutral: 0,
// 		initialValueBad: 0,
// 	};
	
// 	state = {
// 		good: this.props.initialValueGood,
// 		neutral: this.props.initialValueNeutral,
// 		bad: this.props.initialValueBad,
// 	};

// 	onLeaveFeedback = ev => {
// 		console.log(ev);
// 		if (ev.target.value === 'good') {
// 			this.setState(prevState => {
// 				return {
// 					good: prevState.good + 1,
// 				};
// 			});
// 		}
// 		if (ev.target.value === 'neutral') {
// 			this.setState(prevState => {
// 				return {
// 					neutral: prevState.neutral + 1,
// 				};
// 			});
// 		}
// 		if (ev.target.value === 'bad') {
// 			this.setState(prevState => {
// 				return {
// 					bad: prevState.bad + 1,
// 				};
// 			});
// 		}
// 	};

// 	calculateTotal = () => {
// 		let total = this.state.good + this.state.neutral + this.state.bad;
// 		return total;
// 	};
// 	calculatePositivePercentage = () => {
// 		let percentage = (this.state.good / this.calculateTotal()) * 100;
// 		return Number.parseInt(percentage);
// 	};
// 	render() {
// 		return (
// 			<Container>
// 				<Section title="Please leave feedback">
// 					<FeedbackOptions
// 						options={['good', 'neutral', 'bad']}
// 						onLeaveFeedback={this.onLeaveFeedback}
// 					/>
// 				</Section>
// 				<Section title="Statistics">
// 					{this.calculateTotal() === 0 ? (
// 						<Notification message="There is no feedback" />
// 					) : (
// 						<Statistics
// 							good={this.state.good}
// 							neutral={this.state.neutral}
// 							bad={this.state.bad}
// 							total={this.calculateTotal()}
// 							positivePercentage={this.calculatePositivePercentage()}
// 						></Statistics>
// 					)}
// 				</Section>
// 			</Container>
// 		);
// 	}
// }

// Feedback.propTypes = {
// 	initialValueGood: PropTypes.number,
// 	initialValueNeutral: PropTypes.number,
// 	initialValueBad: PropTypes.number,
// };
// export default Feedback;
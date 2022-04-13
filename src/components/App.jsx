import React, { Component } from 'react';

import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Section from './Section/Section';
import PropTypes from 'prop-types';
// import s from './Feedback/Feedback.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleLeaveFeedback = e => {
    const value = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [value]: prevState[value] + this.props.step,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section
          message={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.handleLeaveFeedback}
            />
          }
        />

        <Section
          message={'Statistics'}
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </div>
    );
  }
}

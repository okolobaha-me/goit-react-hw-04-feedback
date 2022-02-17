import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from '../Section';
import s from './Feedback.module.css';

class Feedback extends Component {
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
    const { options } = this.props;
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
        <Section
          message={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={options}
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

export default Feedback;

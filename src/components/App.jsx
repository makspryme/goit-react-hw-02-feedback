import Section from 'components/Section/Section';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    if (total > 0) {
      return Math.ceil((this.state.good / total) * 100);
    }
  };

  // незнаю як замінти switch :( шукав у слаці і тд.
  onLeaveFeedback = event => {
    switch (event.target.value) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Section
          title="Please leave feedback"
          onLeaveFeedback={this.onLeaveFeedback}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

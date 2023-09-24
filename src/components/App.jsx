import Section from 'components/Section/Section';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback = () => {
    return this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    return this.setState(prevState => ({
      positivePercentage: Math.ceil((prevState.good / prevState.total) * 100),
    }));
  };

  onLeaveFeedback = event => {
    console.log(event.target.value);
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
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </div>
    );
  }
}

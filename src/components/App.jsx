import Section from 'components/Section/Section';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = good + neutral + bad;

    if (total > 0) {
      return Math.ceil((good / total) * 100);
    }
  }

  function onLeaveFeedback(event) {
    switch (event.target.value) {
      case 'good':
        setGood(s => s + 1);
        countTotalFeedback();
        countPositiveFeedbackPercentage();
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        countTotalFeedback();
        countPositiveFeedbackPercentage();
        break;
      case 'bad':
        setBad(s => s + 1);
        countTotalFeedback();
        countPositiveFeedbackPercentage();
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <Section
        title="Please leave feedback"
        onLeaveFeedback={onLeaveFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </div>
  );
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     if (total > 0) {
//       return Math.ceil((this.state.good / total) * 100);
//     }
//   };

//   // незнаю як замінти switch :( шукав у слаці і тд.
//   onLeaveFeedback = event => {
//     switch (event.target.value) {
//       case 'good':
//         this.setState(prevState => ({
//           good: prevState.good + 1,
//         }));
//         this.countTotalFeedback();
//         this.countPositiveFeedbackPercentage();
//         break;
//       case 'neutral':
//         this.setState(prevState => ({
//           neutral: prevState.neutral + 1,
//         }));
//         this.countTotalFeedback();
//         this.countPositiveFeedbackPercentage();
//         break;
//       case 'bad':
//         this.setState(prevState => ({
//           bad: prevState.bad + 1,
//         }));
//         this.countTotalFeedback();
//         this.countPositiveFeedbackPercentage();
//         break;

//       default:
//         break;
//     }
//   };

//   render() {
//     return (
//       <div>
//         <Section
//           title="Please leave feedback"
//           onLeaveFeedback={this.onLeaveFeedback}
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback}
//           positivePercentage={this.countPositiveFeedbackPercentage}
//         />
//       </div>
//     );
//   }
// }

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function Section({
  title,
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

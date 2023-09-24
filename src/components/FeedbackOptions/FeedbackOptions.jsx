export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button value="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button value="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button value="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

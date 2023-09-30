export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(button => {
        return (
          <button
            key={button.value}
            value={button.value}
            onClick={onLeaveFeedback}
          >
            {button.btnText}
          </button>
        );
      })}
    </div>
  );
}

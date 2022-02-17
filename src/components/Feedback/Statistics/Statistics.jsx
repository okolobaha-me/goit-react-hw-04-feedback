import PropTypes from 'prop-types';
import Notification from './Notification';

function Statistics({ good, neutral, bad, positivePercentage, total }) {
  return (
    <div>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};

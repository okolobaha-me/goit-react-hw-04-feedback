import PropTypes from 'prop-types';
import Notification from './Notification';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, positivePercentage, total }) {
  return (
    <div className={s.statContainer}>
      {total > 0 ? (
        <>
          <p className={`${s.stat} ${s.good}`}>Good: {good}</p>
          <p className={`${s.stat} ${s.neutral}`}>Neutral: {neutral}</p>
          <p className={`${s.stat} ${s.bad}`}>Bad: {bad}</p>
          <p className={s.stat}>Total: {total}</p>
          <p className={`${s.stat} ${chooseColor(positivePercentage)}`}>
            Positive feedback: {positivePercentage}%
          </p>
        </>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}

const chooseColor = percent => {
  if (percent < 33) {
    return s.bad;
  } else if (percent >= 66) {
    return s.good;
  }
  return s.neutral;
};

export default Statistics;

Statistics.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};

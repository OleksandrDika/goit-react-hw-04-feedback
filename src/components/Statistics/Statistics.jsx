import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistic</h2>
    {total ? (
      <div>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>
          Positive feedback:
          {positivePercentage ? Math.round(positivePercentage) : 0}%
        </p>
      </div>
    ) : (
      <Notification message={'There is no feedback'} />
    )}
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

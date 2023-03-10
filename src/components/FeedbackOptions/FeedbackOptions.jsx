import React from 'react';
import PropTypes from 'prop-types';
import { Buttonbox } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Buttonbox>
    {options.map(item => {
      return (
        <button onClick={onLeaveFeedback} name={item} key={nanoid()}>
          {item}
        </button>
      );
    })}
  </Buttonbox>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

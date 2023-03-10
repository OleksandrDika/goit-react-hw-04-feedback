import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;

      default:
        console.log('Нет такого поля');
        break;
    }
  };

  const total = good + neutral + bad;
  const percentage = (good * 100) / total;
  const options = ['good', 'neutral', 'bad'];
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} options={options} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={percentage}
      />
    </Section>
  );
};

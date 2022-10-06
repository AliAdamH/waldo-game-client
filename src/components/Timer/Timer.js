import React, { useEffect, useState } from 'react';
import { ReactComponent as Watch } from '../../Images/stopwatch.svg';
import './Timer.css';

const Timer = ({ score }) => {
  // Doubt the performance of this object creation
  // does it happens on every rerender ?
  const date = new Date(null);
  const [strTime, setStrTime] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    score.current = count;
    date.setSeconds(count);
    setStrTime(date.toISOString().slice(11, 19));
  }, [count]);

  useEffect(() => {
    // on mount start doing things.
    date.setSeconds(0);

    let timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="timer">
        <Watch className="timer__watch" />
        <span className="timer__text">{strTime}</span>
      </div>
    </>
  );
};

export default Timer;

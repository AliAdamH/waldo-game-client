import React, { useEffect, useRef, useState } from 'react';

const Timer = ({ score }) => {
  // Doubt the performance of this object creation
  // does it happens on every rerender ?
  const date = new Date(null);
  const [strTime, setStrTime] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    score.current = count;
    date.setSeconds(count);
    setStrTime(date.toISOString());
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
      <p>
        Hello from timer this is count number: {count} and {strTime}
      </p>
    </>
  );
};

export default Timer;

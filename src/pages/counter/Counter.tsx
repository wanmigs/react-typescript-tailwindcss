import React, { useState } from 'react';
import './Counter.scss';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="header">Counter</h1>
      <div className="counter-app">
        <button className="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <div className="count">{count}</div>
        <button className="decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;

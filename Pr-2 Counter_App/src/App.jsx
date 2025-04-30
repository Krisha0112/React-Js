import React, { useState } from 'react';

function CounterApp() {
  const [cnt, setCount] = useState(0);

  const Increment = () => {
    setCount(cnt + 1);
  };

  const Decrement = () => {
    setCount(cnt - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div align="center">
      <h2>React Counter App</h2>
      <h1>{cnt}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement} >- </button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CounterApp;

import React, { useState } from 'react';
import '../App.css';

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initial);

  return (
    <div className="counter-container">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-buttons">
        <button
          className="btn btn-decrement"
          onClick={decrement}
          disabled={count <= 0}
          aria-label="Decrement"
        >
          -
        </button>
        <button
          className="btn btn-reset"
          onClick={reset}
          aria-label="Reset"
        >
          Reset
        </button>
        <button
          className="btn btn-increment"
          onClick={increment}
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

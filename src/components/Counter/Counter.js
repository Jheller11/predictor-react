import React from 'react'

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div className="score-counter">
      <button onClick={handleIncrement} className="increment">
        +
      </button>
      <div className="score">{count}</div>
      <button onClick={handleDecrement} className="decrement">
        -
      </button>
    </div>
  )
}

export default Counter

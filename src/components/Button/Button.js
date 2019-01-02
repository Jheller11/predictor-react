import React from 'react'

const Button = ({ value, onSubmit }) => {
  return (
    <button type="submit" onSubmit={onSubmit}>
      {value}
    </button>
  )
}

export default Button

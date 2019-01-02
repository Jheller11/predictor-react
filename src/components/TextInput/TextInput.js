import React from 'react'

const TextInput = ({ label, name, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}: </label>
      <input onChange={handleChange} type="text" name={name} />
    </div>
  )
}

export default TextInput

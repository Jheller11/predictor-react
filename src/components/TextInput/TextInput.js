import React from 'react'
import styles from './TextInput.module.css'

const TextInput = ({ label, name, type, handleChange }) => {
  return (
    <div className={styles['form-group']}>
      <label className={styles.label} htmlFor={name}>
        {' '}
        {label}:{' '}
      </label>
      <input
        className={styles.input}
        onChange={handleChange}
        type={type}
        name={name}
        required
      />
    </div>
  )
}

export default TextInput

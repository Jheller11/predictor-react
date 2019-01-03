import React from 'react'
import styles from './Button.module.css'

const Button = ({ value, type, onSubmit }) => {
  return (
    <button className={styles.btn} type={type} onSubmit={onSubmit}>
      {value}
    </button>
  )
}

export default Button

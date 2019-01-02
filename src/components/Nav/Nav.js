import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = loggedIn => {
  return (
    <nav className={styles['main-nav']}>
      <Link className={styles['link']} to="/">
        Premier League Predictor
      </Link>
      <Link className={styles['link']} to="/about">
        About
      </Link>
      <Link className={styles['link']} to="/login">
        Log In
      </Link>
      <Link className={styles['link']} to="/signup">
        Sign Up
      </Link>
    </nav>
  )
}

export default Nav

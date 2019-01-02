import React from 'react'
import { Link } from 'react-router-dom'

const Nav = loggedIn => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  )
}

export default Nav

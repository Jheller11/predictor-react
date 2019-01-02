import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>How to Play:</h3>
      <ol>
        <li>
          <Link to="/signup">Create an account</Link> or{' '}
          <Link to="login">log in</Link> to get started
        </li>
        <li>View upcoming matches and make your predictions.</li>
        <li>Check back after each week to see how you did.</li>
      </ol>
    </div>
  )
}
export default About

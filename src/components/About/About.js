import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <section>
        <h3>How to Play:</h3>
        <ol>
          <li>
            <Link to="/signup">Create an account</Link> or{' '}
            <Link to="login">log in</Link> to get started
          </li>
          <li>View upcoming matches and make your predictions.</li>
          <li>Check back after each week to see how you did.</li>
        </ol>
      </section>
      <section>
        <h3>Rules:</h3>
        <ol>
          <li>One entry per week per user.</li>
          <li>Highest point total wins.</li>
          <li>Correct results are worth 10 points.</li>
          <li>Correct scores are worth 50 points.</li>
        </ol>
      </section>
      <section>
        <h3>Prizes:</h3>
        <ol>
          <li>Nothing, yet.</li>
        </ol>
      </section>
      <section>
        <h3>Help:</h3>
        <ol>
          <li>
            <Link to="/">I forgot my password.</Link>
          </li>
          <li>
            <Link to="/">I forgot to submit my picks.</Link>
          </li>
          <li>
            <Link to="/">I have another problem.</Link>
          </li>
        </ol>
      </section>
    </div>
  )
}
export default About

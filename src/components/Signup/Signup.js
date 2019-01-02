import React, { Component } from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

class Signup extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>Register</h3>
        <form>
          <TextInput name="email" type="text" label="E-mail Address" />
          <TextInput name="username" type="text" label="Username" />
          <TextInput name="password" type="password" label="Password" />
          <Button value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default Signup

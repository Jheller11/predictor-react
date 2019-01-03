import React, { Component } from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <form>
          <TextInput name="email" type="text" label="E-mail Address" />
          <TextInput name="password" type="password" label="Password" />
          <Button value="Log In" type="submit" />
          <Button value="Clear Form" type="reset" />
        </form>
      </div>
    )
  }
}

export default Login

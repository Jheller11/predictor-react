import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <div className="App">
        <div>Hello world</div>
        <Nav loggedIn={this.state.loggedIn} />
        {/* <Switch>
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Home />} />
        </Switch> */}
      </div>
    )
  }
}

export default App

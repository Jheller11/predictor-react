import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Signup from './components/Signup/Signup'
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
        <Nav loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import Cowbell from './components/cowbell'
import Stick from './components/stick'

class App extends Component {

  state = {
    animateStick: false
  }

  handleAnimateStick = (e) => {
    const newVal = !this.state.animateStick
    this.setState({
      animateStick: newVal
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MORE COWBELL</h1>
        </header>
        <div className="App-intro">
            < Cowbell />
          < Stick animateStick={this.state.animateStick} handleAnimate={this.handleAnimateStick}/>
        </div>
      </div>
    );
  }
}

export default App;

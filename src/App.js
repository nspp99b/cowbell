import React, { Component } from 'react';
import Cowbell from './components/cowbell';
import Stick from './components/stick';
import PowerMeter from './components/powermeter'
import cow from './sounds/cowbell.mp3';

class App extends Component {

  state = {
    animateStick: false,
    powerLevel: "",
    lowPowerBox: false,
    medPowerBox: false,
    highPowerBox: false
  }

  handleAnimateStick = (e) => {
    const newVal = !this.state.animateStick
    this.setState({
      animateStick: newVal
    })
    if (newVal === true) {
      let dunk = new Audio(cow)
      setTimeout(function(){ dunk.play(); }, 575);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">COWBELL</h1>
        </header>
        <div className="App-body">
          <Cowbell />
          <Stick animateStick={this.state.animateStick} handleAnimate={this.handleAnimateStick}/>
          <PowerMeter />
        </div>    
      </div>
    );
  }
}

export default App;

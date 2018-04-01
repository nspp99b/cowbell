import React, { Component } from 'react';
import Cowbell from './components/cowbell';
import Stick from './components/stick';
import PowerMeter from './components/powermeter'
import cow from './sounds/cowbell.mp3';

class App extends Component {

  state = {
    animateStick: false,
    keyCount: 0,
    keyRate: 0,
    meterTime: 3,
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.meterTime === 0) {
      this.clearCountDown()
    }
  }

  handleKeyUp = () => {
    let k = this.state.keyCount
    this.setState({
      keyCount: k++
    })
  }

  countDown = () => {
    console.log('countDown fired and will decrement meter by 1')
    let newVal = this.state.meterTime - 1
    this.setState({
      meterTime: newVal
    })
    console.log(this.state.meterTime)
  }

  clearCountDown = () => {
    clearInterval(this.interval)
  }

  handleCountDownStart = () => {
    this.interval = setInterval(this.countDown, 1000)
  }

  handleAnimateStick = () => {
    const newVal = !this.state.animateStick
    this.setState({
      animateStick: newVal,
      meterTime: 3,
      keyCount: 0
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
          <PowerMeter meterTime={this.state.meterTime} start={this.handleCountDownStart} keyCount={this.state.keyCount}/>
        </div>
      </div>
    );
  }
}

export default App;

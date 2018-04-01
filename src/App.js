import React, { Component } from 'react';
import Cowbell from './components/cowbell';
import Stick from './components/stick';
import PowerMeter from './components/powermeter'
import cowbellSounds from './sounds';

class App extends Component {

  state = {
    animateStick: false,
    keyCount: 0,
    meterTime: 'More Cowbell!',
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.meterTime === 0) {
      this.clearCountDown()
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = () => {
    console.log('handleKeyUp fired')
    let k = this.state.keyCount + 1
    if (this.state.meterTime !== 'More Cowbell!' && this.state.meterTime !== 0) {
      this.setState({
        keyCount: k
      })
      console.log(this.state.keyCount)
    }
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
    this.handleAnimateStick()
  }

  handleCountDownStart = () => {
    this.setState({
      keyCount: 0,
      meterTime: 3
    })
    this.interval = setInterval(this.countDown, 1000)
  }

  handlePlayCowbell = () => {
    switch (true) {
      case this.state.keyCount < 30:
        cowbellSounds.quietCowbell1.play();
        break;
      case this.state.keyCount < 60:
        cowbellSounds.quietCowbell2.play();
        break;
      case this.state.keyCount < 100:
        cowbellSounds.medCowbell2.play();
        break;
      case this.state.keyCount < 200:
        cowbellSounds.highCowbell1.play();
        break;
      default:
        cowbellSounds.quietCowebell1.play();
        break;
    }
    this.setState({
      animateStick: false
    })
  }

  handleAnimateStick = () => {
    this.setState({
      animateStick: true,
      meterTime: 'More Cowbell!'
    })
    setTimeout(this.handlePlayCowbell, 575);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{width: '450px'}} onClick={this.handleCountDownStart}> {this.state.meterTime} </h1>
          <PowerMeter keyCount={this.state.keyCount}/>
        </header>
        <div className="App-body">
          <Cowbell />
          <Stick animateStick={this.state.animateStick} handleAnimate={this.handleAnimateStick}/>
        </div>
      </div>
    );
  }
}

export default App;

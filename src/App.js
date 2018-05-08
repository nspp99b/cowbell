import React, { Component } from 'react';
import './styles.css';
import './animate.min.css';
import Cowbell from './components/cowbell';
import Stick from './components/stick';
import PowerMeter from './components/powermeter';
import cowbellSounds from './sounds';

class App extends Component {

  state = {
    animateStick: false,
    animateBell: false,
    keyCount: 0,
    meterTime: 'More Cowbell!',
  };

  //add keyup listener
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  };

  //clear the countdown when it hits 0
  componentWillUpdate(nextProps, nextState) {
    if (nextState.meterTime === 0) {
      this.clearCountDown();
    };
  };

  //on header click, change metertime text to 3, use event loop to call countDown every second
  handleCountDownStart = () => {
    this.setState({
      animateBell: false,
      keyCount: 0,
      meterTime: 3
    });
    this.interval = setInterval(this.countDown, 1000);
  };

  //decrement meterTime by 1
  countDown = () => {
    console.log('countDown fired and will decrement meter by 1');
    let newVal = this.state.meterTime - 1;
    this.setState({
      meterTime: newVal
    });
    console.log(this.state.meterTime);
  };

  //if the countdown has begun but is not over, increment keycount
  handleKeyUp = () => {
    console.log('handleKeyUp fired');
    if (this.state.meterTime !== 'More Cowbell!' && this.state.meterTime !== 0) {
      let k = this.state.keyCount + 1;
      this.setState({
        keyCount: k
      });
      console.log(this.state.keyCount);
    };
  };

  //clear the interval and begin the stick animation
  clearCountDown = () => {
    clearInterval(this.interval);
    this.handleAnimateStick();
  };

  //flip animateStick to true to trigger new class assignments
  //call play cowbell sound at visually pleasing delay
  handleAnimateStick = () => {
    this.setState({
      animateStick: true,
      meterTime: 'More Cowbell!'
    });
    setTimeout(this.handlePlayCowbell, 575);
  };

  //call strikeCowbell with appropriate args based on keycount
  handlePlayCowbell = () => {
    switch (true) {
      case this.state.keyCount < 30:
        this.strikeCowbell("quietCowbell1", "shake");
        break;
      case this.state.keyCount < 60:
        this.strikeCowbell("quietCowbell2", "shake");
        break;
      case this.state.keyCount < 100:
        this.strikeCowbell("medCowbell2", "wobble");
        break;
      case this.state.keyCount < 200:
        this.strikeCowbell("highCowbell1", "fadeOutLeft");
        break;
      default:
        this.strikeCowbell("quietCowbell1", "shake");
        break;
    };
  };

  //play appropriate sound and set appropriate css animation
  strikeCowbell = (sound, animation) => {
    cowbellSounds[sound].play();
    this.setState({
      animateStick: false,
      animateBell: animation
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={this.handleCountDownStart}> {this.state.meterTime} </h1>
          <PowerMeter keyCount={this.state.keyCount}/>
        </header>
        <div className="App-body">
          <Cowbell animateBell={this.state.animateBell}/>
          <Stick animateStick={this.state.animateStick} handleAnimate={this.handleAnimateStick}/>
        </div>
      </div>
    );
  };
};

export default App;

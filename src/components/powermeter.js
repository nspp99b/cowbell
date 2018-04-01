import React from 'react';

const PowerMeter = (props) => {

  return (
    <div className="App-powermeter">
      <h2 onClick={props.start}> {props.meterTime} </h2>
      <div id="powermeter-1" className="App-powermeter-low"></div>
      <div id="powermeter-2" className="App-powermeter-low"></div>
      <div id="powermeter-3" className="App-powermeter-low"></div>
      <div id="powermeter-4" className="App-powermeter-low"></div>
      <div id="powermeter-5" className="App-powermeter-med"></div>
      <div id="powermeter-6" className="App-powermeter-med"></div>
      <div id="powermeter-7" className="App-powermeter-high"></div>
      <div id="powermeter-8" className="App-powermeter-high"></div>
    </div>
  )
}

export default PowerMeter

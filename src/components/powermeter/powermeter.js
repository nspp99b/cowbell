import React from 'react';
import './powermeter.css';

const PowerMeter = (props) => {

  // factory for generating appropriate functions to dynamically style
  // meters of different color and fill keycount thresholds

  const meterClass = (meterType, threshold) => {
    return function() {
      if (props.keyCount > threshold) {
        return meterType + "-fill";
      } else {
        return meterType;
      };
    };
  };

  return (
    <div className="App-powermeter">
      <div className={meterClass("App-powermeter-low", 10)()}></div>
      <div className={meterClass("App-powermeter-low", 20)()}></div>
      <div className={meterClass("App-powermeter-low", 30)()}></div>
      <div className={meterClass("App-powermeter-low", 40)()}></div>
      <div className={meterClass("App-powermeter-med", 61)()}></div>
      <div className={meterClass("App-powermeter-med", 81)()}></div>
      <div className={meterClass("App-powermeter-high", 100)()}></div>
      <div className={meterClass("App-powermeter-high", 140)()}></div>
    </div>
  );
};

export default PowerMeter;

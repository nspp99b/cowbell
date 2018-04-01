import React from 'react';

const PowerMeter = (props) => {

  const meterClass = (meterType, threshold) => {
    return function() {
      if (props.keyCount > threshold) {
        return meterType + "-fill"
      } else {
        return meterType
      }
    }
  }

  return (
    <div className="App-powermeter">
      <div className={meterClass("App-powermeter-low", 5)()}></div>
      <div className={meterClass("App-powermeter-low", 10)()}></div>
      <div className={meterClass("App-powermeter-low", 15)()}></div>
      <div className={meterClass("App-powermeter-low", 20)()}></div>
      <div className={meterClass("App-powermeter-med", 25)()}></div>
      <div className={meterClass("App-powermeter-med", 30)()}></div>
      <div className={meterClass("App-powermeter-high", 40)()}></div>
      <div className={meterClass("App-powermeter-high", 50)()}></div>
    </div>
  )
}

export default PowerMeter

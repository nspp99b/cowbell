import React from 'react'
import stickUp from '../images/stickup.png'

const Stick = ({animateStick}) => {

  const stickClass = () => {
    if (animateStick) {
      return "hit-cowbell"
    } else {
      return "resting-stick"
    }
  }

  return (
      <img className={stickClass()} src={stickUp} alt="stick" height="400px"></img>
  )
}

export default Stick

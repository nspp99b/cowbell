import React from 'react'
import stickUp from '../images/stickup.png'

const Stick = ({animateStick, handleAnimate}) => {

  const stickClass = () => {
    if (animateStick) {
      return "hit-cowbell"
    } else {
      return "resting-stick"
    }
  }

  return (
      <img className={stickClass()} onClick={handleAnimate} src={stickUp} alt="stick" height="400px"></img>
  )
}

export default Stick

// className="animated rotateInDownRight"

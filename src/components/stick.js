import React from 'react'
import stickUp from '../images/stickup.png'
import stickDown from '../images/stickdown.png'

const Stick = ({animateStick, handleAnimate}) => {
  console.log(animateStick)
  console.log(handleAnimate)
  const stickClass = () => {
    if (animateStick) {
      return "hit-cowbell"
    } else {
      return "resting-stick"
    }
    console.log("stickClass ran")
  }

  return (
      <img className={stickClass()} onClick={handleAnimate} src={stickUp} alt="stick" height="400px"></img>
  )
}

export default Stick

// className="animated rotateInDownRight"

import React from 'react';
import stickUp from '../images/stickup.png';
import './stick.css';

const Stick = ({animateStick}) => {

  //conditionally assign Stick class based on animateStick prop
  const stickClass = () => {
    if (animateStick) {
      return "hit-cowbell";
    } else {
      return "resting-stick";
    }
  }

  return (
      <img className={stickClass()} src={stickUp} alt="stick" height="400px"></img>
  );
};

export default Stick;

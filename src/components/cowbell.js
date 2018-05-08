import React from 'react';
import cowbellImage from '../images/cowbell.png';

const Cowbell = ({animateBell}) => {

  const bellClass = () => {
    if (animateBell) {
      return `cowbell animated ${animateBell}`;
    } else {
      return "";
    };
  };

  return (
      <img className={bellClass()} src={cowbellImage} alt="cowbell"></img>
  );
};

export default Cowbell;

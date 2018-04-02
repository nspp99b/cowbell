import React from 'react'
import cowbellImage from '../images/cowbell.jpg'

const Cowbell = ({animateBell}) => {

  const bellClass = () => {
    if (animateBell) {
      return `cowbell animated ${animateBell}`
    } else {
      return "cowbell"
    }
  }

  return (
      <img className={bellClass()} src={cowbellImage} alt="cowbell"></img>
  )
}

export default Cowbell

import React from 'react'
import './effects.css'

const AmbientBirds = ({ side = 'right' }) => {
  return (
    <div className={`ambient-birds ambient-birds-${side}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}

export default AmbientBirds
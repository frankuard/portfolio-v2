import React from 'react'
import './effects.css'

const MountainWorld = () => {
  return (
    <div className="mountain-world" aria-hidden="true">
      <div className="ridge ridge-far" />
      <div className="ridge ridge-mid" />
      <div className="ridge ridge-near" />
      <div className="snow snow-a" />
      <div className="snow snow-b" />
      <div className="trail" />
      <span className="pine pine-a" />
      <span className="pine pine-b" />
      <span className="pine pine-c" />
      <span className="pine pine-d" />
    </div>
  )
}

export default MountainWorld
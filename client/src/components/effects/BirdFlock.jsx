import React from 'react'
import './effects.css'

// variant "a" = 3 birds flying right, "b" = 2 birds flying left
const BirdFlock = ({ variant = 'a' }) => {
  const count = variant === 'a' ? 3 : 2

  return (
    <div className={`bird-flock bird-flock-${variant}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  )
}

export default BirdFlock
import React from 'react'

const Display = ({ as: Component = 'h2', children, className = ''}) => {
  return (
    <div><Component className={`ds-display ${className}`}>{children}</Component></div>
  )
}

export default Display
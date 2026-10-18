import React from 'react'

const Eyebrow = ({children, className = ''}) => {
  return <p className={`ds-eyebrow ${className}`}>{children}</p>
  
}

export default Eyebrow
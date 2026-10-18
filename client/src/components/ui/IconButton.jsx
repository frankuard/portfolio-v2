import React from 'react'

const IconButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`cursor-pointer border-0 bg-transparent ${className}`} {...props}>
      {children}
    </button>
  )
}

export default IconButton
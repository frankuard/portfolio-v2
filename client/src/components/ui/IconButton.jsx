import React from 'react'

const IconButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`ds-icon-button ${className}`} {...props}>
        {children}
    </button>
  )
}

export default IconButton
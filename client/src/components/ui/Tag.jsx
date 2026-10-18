import React from 'react'

const Tag = ({children, className = ''}) => {
  return (
    <span className={`ds-tag ${className}`}>{children}</span>
  )
}

export default Tag
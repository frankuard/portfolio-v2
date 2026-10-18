import React from 'react'
import Arrow from './Arrow'

const TextLink = ({children,className= '', ...props}) => {
  return (
    <a className={`ds-text-link ${className}`} {...props}>
      {children}
      <Arrow />
    </a>
  )
}

export default TextLink
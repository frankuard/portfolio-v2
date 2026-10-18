import React from 'react'
import Arrow from './Arrow'

const TextLink = ({ children, className = '', ...props }) => {
  return (
    <a
      className={`group inline-flex items-center gap-[0.9rem] border-b border-current pb-[0.45rem] text-[0.78rem] ${className}`}
      {...props}
    >
      {children}
      <Arrow className="transition-transform duration-250 group-hover:translate-x-[0.35rem]" />
    </a>
  )
}

export default TextLink
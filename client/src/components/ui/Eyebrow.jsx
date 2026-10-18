import React from 'react'

const Eyebrow = ({ children, className = '' }) => {
  return (
    <p className={`m-0 font-mono text-[0.66rem] leading-[1.4] tracking-[0.12em] uppercase ${className}`}>
      {children}
    </p>
  )
}

export default Eyebrow
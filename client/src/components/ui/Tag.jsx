import React from 'react'

const Tag = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex rounded-4xl border border-current px-3 py-[0.45rem] font-mono text-[0.58rem] uppercase ${className}`}
    >
      {children}
    </span>
  )
}

export default Tag
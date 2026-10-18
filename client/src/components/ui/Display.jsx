import React from 'react'

// `as` lets you choose the heading level: <Display as="h1">
const Display = ({ as: Component = 'h2', children, className = '' }) => {
  return (
    <Component
      className={`m-0 text-[clamp(3.1rem,6vw,6.6rem)] leading-[1.02] font-light tracking-[-0.045em] [&_em]:font-serif [&_em]:font-light [&_em]:tracking-[-0.035em] ${className}`}
    >
      {children}
    </Component>
  )
}

export default Display
import React from 'react'

const Container = ({ children, className = '' }) => {
  return <div className={`mx-auto w-(--container) ${className}`}>{children}</div>
}

export default Container
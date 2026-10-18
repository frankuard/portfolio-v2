import React from 'react'

const Container = ({children, className= ''}) => {
  return (
    <div className={`ds-container ${className}`}>{children}</div>
  )
}

export default Container
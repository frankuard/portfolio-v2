import React from 'react'

const Arrow = ({diagonal = false}) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={diagonal ? 'M5 19 19 5M9 5h10v10' : 'M4 12h16M14 6l6 6-6 6'} />
    </svg>
  )
}

export default Arrow
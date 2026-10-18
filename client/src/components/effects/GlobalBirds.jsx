import React, { useEffect, useState } from 'react'
import BirdFlock from './BirdFlock'

const GlobalBirds = () => {
  const [faded, setFaded] = useState(false)

  useEffect(() => {
    const onScroll = () => setFaded(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-700 ${
        faded ? 'opacity-[0.12]' : 'opacity-100'
      }`}
    >
      <BirdFlock variant="a" />
      <BirdFlock variant="b" />
    </div>
  )
}

export default GlobalBirds
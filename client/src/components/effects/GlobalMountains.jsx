import React, { useEffect, useState } from 'react'
import MountainWorld from './MountainWorld'
import './effects.css'

const GlobalMountains = () => {
  const [away, setAway] = useState(false)

  useEffect(() => {
    const onScroll = () => setAway(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`global-mountains${away ? ' is-away' : ''}`} aria-hidden="true">
      <MountainWorld />
    </div>
  )
}

export default GlobalMountains
import React from 'react'
import SiteNav from '../src/components/layout/SiteNav'
import BirdFlock from '../src/components/effects/BirdFlock'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#7a3028]">
      <SiteNav />
      <BirdFlock variant="a" />
    </div>
  )
}

export default App
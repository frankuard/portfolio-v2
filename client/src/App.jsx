import React from 'react'
import SiteNav from './components/layout/SiteNav'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import useReveal from './hooks/useReveal'

const App = () => {
  useReveal()

  return (
    <div className="overflow-hidden">
      <SiteNav />
      <main>
        <Hero />
        <About />
        {/* next: Experience, Recognition, Stack, then Contact in the footer */}
      </main>
    </div>
  )
}

export default App
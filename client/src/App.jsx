import React from 'react'
import SiteNav from './components/layout/SiteNav'
import Hero from './sections/Hero/Hero'

const App = () => {
  return (
    <div className="overflow-hidden">
      <SiteNav />
      <main>
        <Hero />
        {/* next: About, Experience, Recognition, Stack, then Contact in the footer */}
      </main>
    </div>
  )
}

export default App
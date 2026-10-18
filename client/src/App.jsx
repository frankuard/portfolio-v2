import React from 'react'
import SiteNav from './components/layout/SiteNav'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Recognition from './sections/Recognition/Recognition'
import useReveal from './hooks/useReveal'
import Stack from './sections/Stack/Stack'


const App = () => {
  useReveal()

  return (
    <div className="overflow-x-clip">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Recognition />
        <Stack />
      </main>
      {/* next: Contact footer */}
    </div>
  )
}

export default App
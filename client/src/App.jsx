import React from 'react'
import SiteNav from './components/layout/SiteNav'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Projects from './sections/Project/Projects'
import Education from './sections/Education/Education'
import Recognition from './sections/Recognition/Recognition'
import useReveal from './hooks/useReveal'
import Contact from './sections/Contact/Contact'
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
        <Projects />
        <Education />
        <Recognition />
        <Stack />
      </main>
      <Contact />
    </div>
  )
}

export default App
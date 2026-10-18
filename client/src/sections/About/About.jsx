import React from 'react'
import Container from '../../components/ui/Container'
import TextLink from '../../components/ui/TextLink'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import AboutTerminal from './AboutTerminal'

const paragraph =
  'mb-5 text-[length:clamp(1.1rem,1.4vw,1.3rem)] leading-[1.7] text-[#744838]'

const About = () => {
  return (
    <section
      id="about"
      className="reveal relative min-h-0 overflow-hidden bg-[linear-gradient(155deg,#dcc8b6,#c8ad97)] pt-[clamp(3.5rem,6vw,6rem)] pb-[clamp(2.5rem,4vw,4rem)] before:absolute before:-top-28 before:-right-[8%] before:-left-[8%] before:h-72 before:bg-alpine-600 before:opacity-[0.08] before:content-[''] before:[clip-path:polygon(0_75%,14%_48%,26%_68%,42%_34%,55%_64%,72%_42%,87%_70%,100%_51%,100%_100%,0_100%)]"
    >
      <AmbientBirds side="right" />

      <Container className="relative z-1">
        <SectionIndex number="01" label="About" aside="Profile" />

        <div className="grid grid-cols-[1fr_0.42fr] gap-[6vw] pt-10 max-md:grid-cols-1 max-md:gap-10 max-md:pt-8">
          <div className="max-w-xl pt-8 pl-[5vw] max-md:pt-0 max-md:pl-0">
            <p className={paragraph}>
              I’m Roshan Karki, a full-stack developer and founder of AI Horizon. I build practical
              digital products with clean interfaces and dependable systems.
            </p>
            <p className={paragraph}>
              My work covers React applications, backend services, databases, API integrations,
              and production deployment.
            </p>
            <TextLink href="#experience" className="mt-3">
              View experience
            </TextLink>
          </div>

          <AboutTerminal />
        </div>
      </Container>
    </section>
  )
}

export default About
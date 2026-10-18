import React from 'react'
import Container from '../../components/ui/Container'
import Display from '../../components/ui/Display'
import Eyebrow from '../../components/ui/Eyebrow'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import ContactForm from './ContactForm'

// Replace these with your real profile links
const LINKEDIN = 'https://www.linkedin.com'
const GITHUB = 'https://github.com'
const INSTAGRAM = 'https://www.instagram.com'

const socials = [
  {
    label: 'LinkedIn',
    href: LINKEDIN,
    paths: ['M7 9v8M7 6.5v.01M11 17v-4.5a3.5 3.5 0 0 1 7 0V17M11 10v7'],
    rect: { x: 3, y: 3, width: 18, height: 18, rx: 4 },
  },
  {
    label: 'Instagram',
    href: INSTAGRAM,
    paths: ['M17.5 6.5h.01'],
    rect: { x: 3, y: 3, width: 18, height: 18, rx: 5 },
    circle: { cx: 12, cy: 12, r: 4 },
  },
  {
    label: 'GitHub',
    href: GITHUB,
    paths: [
      'M15 21v-3.5c.04-1-.35-1.96-1.08-2.65 3.6-.4 7.38-1.77 7.38-8a6.24 6.24 0 0 0-1.67-4.33A5.8 5.8 0 0 0 19.47.2S18.15-.23 15 1.85a15.2 15.2 0 0 0-6 0C5.85-.23 4.53.2 4.53.2a5.8 5.8 0 0 0-.16 2.32A6.24 6.24 0 0 0 2.7 6.87c0 6.22 3.78 7.59 7.38 8A3.73 3.73 0 0 0 9 17.5V21M9 18c-3 .92-3-1.5-4.2-2',
    ],
  },
]

const Contact = () => {
  return (
    <footer
      id="contact"
      className="reveal relative min-h-svh overflow-x-clip bg-alpine-950 pt-[clamp(6rem,10vw,10rem)] pb-12 text-snow after:absolute after:-right-[8%] after:bottom-0 after:h-[70%] after:w-[55%] after:bg-[repeating-radial-gradient(ellipse_at_bottom_right,transparent_0_3rem,#fff_3.05rem_3.1rem)] after:opacity-20 after:content-['']"
    >
      <AmbientBirds side="right" />

      <Container className="relative z-2">
        <SectionIndex light number="05" label="Contact" aside="Start a conversation" />

        <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(26rem,0.72fr)] items-start gap-[clamp(4rem,9vw,9rem)] pt-22 pb-24 max-md:grid-cols-1 max-md:gap-14 max-md:pt-16 max-md:pb-20">
          {/* left: heading, text, socials */}
          <div className="sticky top-20 max-md:static">
            <Eyebrow>Want to work together?</Eyebrow>
            <Display className="mt-6 max-w-176 text-[length:clamp(3.7rem,6vw,6.7rem)] max-md:text-[length:clamp(3.4rem,14vw,4.6rem)]">
              Let’s make something <em>meaningful.</em>
            </Display>

            <p className="mt-10 mb-0 max-w-136 text-[0.9rem] leading-[1.85] text-[#e5c4b1]">
              Have a product idea, a project that needs a developer, or a collaboration in mind?
              Tell me a little about it and let’s see what we can build together.
            </p>

            <p className="mt-8 mb-0 flex items-center gap-3 font-mono text-[0.58rem] tracking-[0.06em] text-[#d59a74] uppercase before:aspect-square before:w-[0.45rem] before:rounded-full before:bg-sun before:shadow-[0_0_0_0.3rem_rgb(255_210_125/12%)] before:content-['']">
              Open to selected projects and collaborations.
            </p>

            <div className="mt-8 flex gap-3" aria-label="Social links">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid aspect-square w-[2.9rem] place-items-center rounded-full border border-white/28 bg-white/4 text-snow transition-[color,background-color,border-color,translate] duration-250 hover:-translate-y-[0.2rem] hover:border-snow hover:bg-snow hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-[0.2rem] focus-visible:outline-sun"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[1.05rem]">
                    {item.paths.map((d) => (
                      <path key={d} d={d} />
                    ))}
                    {item.rect && <rect {...item.rect} />}
                    {item.circle && <circle {...item.circle} />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* right: the form */}
          <ContactForm />
        </div>

        {/* bottom row */}
        <div className="flex justify-between border-t border-white/22 pt-6 font-mono text-[0.56rem] uppercase max-md:flex-col max-md:gap-4">
          <span>© {new Date().getFullYear()} Roshan Karki</span>
          <div className="flex gap-8 max-md:gap-4">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Contact
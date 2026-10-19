import React, { useRef } from 'react'
import Container from '../../components/ui/Container'
import Display from '../../components/ui/Display'
import TextLink from '../../components/ui/TextLink'
import BirdFlock from '../../components/effects/BirdFlock'
import MountainWorld from '../../components/effects/MountainWorld'
import useHeroScroll from '../../hooks/useHeroScroll'
import './Hero.css'

// Shared look of the two pill buttons
const buttonBase =
  'min-w-[9.5rem] justify-center rounded-[3rem] border border-white/70 px-[1.25rem] py-[0.95rem] font-mono text-[0.74rem] font-semibold tracking-[0.06em] uppercase backdrop-blur-[0.75rem] transition-[color,background-color,border-color,translate] duration-300 ease-out hover:-translate-y-[0.2rem] max-md:min-w-auto max-md:px-4 max-md:py-[0.8rem]'

const Hero = () => {
  const heroRef = useRef(null)
  useHeroScroll(heroRef)

  return (
    <section
      className="hero relative min-h-svh overflow-hidden text-snow"
      id="top"
      aria-label="Introduction"
      ref={heroRef}
    >
      <div className="absolute top-[12%] left-[59%] aspect-square w-96 animate-[sun-breathe_6s_ease-in-out_infinite_alternate] rounded-full bg-sun/58 blur-[5rem]" />
      <BirdFlock variant="a" />
      <BirdFlock variant="b" />

      <Container className="relative z-5 origin-top pt-[23vh] opacity-(--hero-fade) will-change-[opacity,transform] [transform:translateY(var(--hero-lift))_scale(var(--hero-scale))] max-md:pt-[20vh] motion-reduce:opacity-100 motion-reduce:[transform:none]">
        <Display
          as="h1"
          className="mx-auto max-w-[72rem] text-center text-[length:clamp(5rem,10.6vw,10.4rem)] leading-[0.84] tracking-[-0.03em] [word-spacing:0.14em] max-md:text-[length:clamp(4.2rem,19vw,6rem)] max-md:leading-[0.82]"
        >
          Roshan Karki
        </Display>

        <p className="mt-5 text-center text-[length:clamp(1.3rem,2.2vw,1.85rem)] leading-[1.4] font-medium text-white">
          Full-stack developer
        </p>

        <div className="mx-auto mt-[0.35rem] flex w-[min(42rem,100%)] flex-col items-center gap-6 max-md:w-full">
          <p className="m-0 max-w-[31rem] text-center text-base leading-[1.75] font-light ">
            I build reliable web products across frontend, backend, databases, and deployment.
          </p>

          <div className="flex flex-none gap-6 max-md:gap-3">
            <TextLink
                            href="https://ik.imagekit.io/ltf9bjszh/Portfolio/Roshan%20Karki%20CV.pdf?ik-attachment=true"
              download
              className={`${buttonBase} bg-snow text-ink hover:border-alpine-950 hover:bg-alpine-950 hover:text-snow`}
            >
              Download CV
            </TextLink>
            <TextLink
              href="#contact"
              className={`${buttonBase} bg-[rgb(65_26_21/35%)] text-white hover:border-snow hover:bg-snow hover:text-ink`}
            >
              Contact me
            </TextLink>
          </div>
        </div>
      </Container>

      <MountainWorld />

      <div
        className="absolute right-14 bottom-8 z-6 w-80 border-t border-t-white/55 border-b border-b-white/28 px-[1.2rem] py-4 font-mono opacity-(--hero-fade) will-change-[opacity,transform] [transform:translateX(var(--hero-slide))] max-md:right-5 max-md:bottom-5 max-md:w-64 motion-reduce:opacity-100 motion-reduce:[transform:none]"
        aria-label="Location coordinates"
      >
        {/* spinning crosshair; its two lines are the ::before and ::after */}
        <span
          className="absolute -top-14 right-[1.2rem] aspect-square w-[2.4rem] animate-[crosshair-spin_12s_linear_infinite] rounded-full border border-white/45 before:absolute before:top-1/2 before:-left-[0.4rem] before:h-px before:w-[calc(100%+0.8rem)] before:bg-white/45 before:content-[''] after:absolute after:top-1/2 after:-left-[0.4rem] after:h-px after:w-[calc(100%+0.8rem)] after:rotate-90 after:bg-white/45 after:content-['']"
          aria-hidden="true"
        />

        <div className="flex items-center gap-3 text-[0.52rem] text-white/72">
          <span>27.7172° N</span>
          <i className="relative h-px flex-1 bg-white/45 after:absolute after:-top-[0.2rem] after:left-[64%] after:aspect-square after:w-[0.45rem] after:rounded-full after:border after:border-current after:content-['']" />
          <span>85.3240° E</span>
        </div>

        <strong className="mt-[0.7rem] block text-[0.8rem] font-normal tracking-[0.13em]">
          BIRATNAGAR / NP
        </strong>
        <small className="mt-[0.35rem] block text-[0.46rem] tracking-[0.06em] text-white/64">
          BASE ALT. 1,400 M · UTC +05:45
        </small>
      </div>
    </section>
  )
}

export default Hero
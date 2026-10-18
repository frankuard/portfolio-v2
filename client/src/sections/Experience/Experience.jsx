import React from 'react'
import Container from '../../components/ui/Container'
import Display from '../../components/ui/Display'
import Eyebrow from '../../components/ui/Eyebrow'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import { experience } from '../../data/experience'

const Experience = () => {
  return (
    <section
      id="experience"
      className="reveal relative bg-[linear-gradient(145deg,#d8c0ab,#cbb09a)] py-[clamp(6rem,10vw,10rem)]"
    >
      <AmbientBirds side="left" />

      <Container className="relative z-1">
        <SectionIndex number="02" label="Experience" aside="Current role" />

        <div className="grid grid-cols-[0.85fr_1.15fr] gap-[10vw] pt-24 max-md:grid-cols-1 max-md:gap-16 max-md:pt-16">
          {/* left: sticky title */}
          <div className="sticky top-28 self-start max-md:static">
            <Eyebrow>Work history</Eyebrow>
            <Display className="mt-6 text-[length:clamp(3.2rem,5.3vw,5.8rem)]">
              Building products and <em>leading development.</em>
            </Display>
          </div>

          {/* right: the curved route line + job cards */}
          <div className="relative pl-20 before:absolute before:top-4 before:bottom-16 before:left-4 before:w-20 before:rounded-tl-[4rem] before:border-t before:border-l before:border-[color:var(--alpine-400)] before:content-[''] max-md:pl-10 max-md:before:w-10">
            {experience.map((item, i) => (
              <article
                key={item.company}
                className={`relative min-h-88 rounded-[4rem_1.25rem_4rem_1.25rem] border border-[rgb(255_245_235/48%)] bg-[linear-gradient(145deg,rgb(231_213_197/92%),rgb(202_178_157/84%))] p-12 shadow-[0_2rem_5rem_rgb(70_35_25/15%)] transition-[translate,rotate,box-shadow] duration-[350ms] ease-[cubic-bezier(0.2,0.75,0.25,1)] hover:-translate-y-2 hover:-rotate-[0.5deg] hover:shadow-[0_2.5rem_6rem_rgb(30_67_116/18%)] max-md:rounded-[2.5rem_1rem_2.5rem_1rem] max-md:p-8 ${
                  i > 0 ? 'mt-8 pt-16' : ''
                }`}
              >
                {/* numbered dot sitting on the route line */}
                <span
                  className={`absolute -left-20 z-2 grid aspect-square w-8 place-items-center rounded-full bg-(--alpine-800) font-mono text-[0.52rem] text-snow shadow-[0_0_0_0.5rem_#dcc6b2] max-md:-left-10 ${
                    i > 0 ? 'top-16' : 'top-0'
                  }`}
                >
                  {item.marker}
                </span>

                <div className="relative z-1 mb-8 grid aspect-square w-22 place-items-center overflow-hidden rounded-3xl border border-[rgb(70_35_25/28%)] bg-snow shadow-[0_0.8rem_2rem_rgb(22_61_119/12%)]">
                  {item.logo ? (
                    <img className="size-[72%] object-contain" src={item.logo} alt={item.logoAlt} />
                  ) : (
                    <span className="font-mono text-base font-medium tracking-[-0.06em]">
                      {item.initials}
                    </span>
                  )}
                </div>

                <p className="m-0 font-mono text-[0.82rem] font-medium tracking-[0.08em] uppercase">
                  {item.years}
                </p>
                <h3 className="mt-[1.1rem] mb-[0.3rem] text-[length:clamp(2.5rem,4vw,4.2rem)] leading-[1.05] font-light tracking-[-0.035em]">
                  {item.company}
                </h3>
                <p className="m-0 font-mono text-[length:clamp(0.78rem,1vw,0.94rem)] leading-normal tracking-[0.08em] text-(--alpine-600) uppercase">
                  {item.role}
                </p>
                <p className="relative z-1 mt-8 mb-0 max-w-120 text-[0.82rem] leading-[1.8] text-[#765344]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience
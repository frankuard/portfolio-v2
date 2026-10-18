import React from 'react'
import Container from '../../components/ui/Container'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import { recognitions } from '../../data/recognitions'

const Recognition = () => {
  return (
    <section
      id="recognition"
      className="reveal relative bg-[linear-gradient(155deg,#d5bda9,#c7aa93)] py-[clamp(6rem,10vw,10rem)] text-ink"
    >
      <AmbientBirds side="right" />

      <Container className="relative z-1">
        <SectionIndex number="03" label="Recognition" />

        <div
          className="w-full pt-20 pb-4 max-md:pt-16"
          aria-label="Recognition highlights"
        >
          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {recognitions.map((item, index) => (
              <article
                key={item.title}
                className="relative min-h-100 rounded-[1.25rem] border border-[rgb(70_35_25/28%)] bg-[rgb(226_205_187/82%)] p-8 shadow-[0_1.2rem_3rem_rgb(70_35_25/10%)] max-md:min-h-80 max-md:p-6"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.08em] text-(--alpine-600) uppercase">
                  {item.date}
                </span>

                <h3 className="mt-28 mb-4 max-w-72 text-[length:clamp(2rem,3vw,3.3rem)] leading-[1.08] font-light tracking-[-0.03em] max-md:mt-20">
                  {item.title}
                </h3>

                <p className="m-0 text-[0.9rem] leading-[1.7] text-[#765344]">
                  {item.description}
                </p>

                <small className="absolute right-8 bottom-8 font-mono text-[0.68rem] tracking-[0.08em] text-(--alpine-600) uppercase max-md:right-6 max-md:bottom-6">
                  0{index + 1}
                </small>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Recognition
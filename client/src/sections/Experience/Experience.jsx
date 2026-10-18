import React from 'react'
import Container from '../../components/ui/Container'
import Display from '../../components/ui/Display'
import Eyebrow from '../../components/ui/Eyebrow'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import ApiStatus from '../../components/ui/ApiStatus'
import useApi from '../../hooks/useApi'
const Experience = () => {
  const { data: experience, loading, error } = useApi('/api/experience')
  return (
    <section
      id="experience"
      className="reveal relative bg-[linear-gradient(145deg,#d8c0ab,#cbb09a)] py-[clamp(3.5rem,6vw,6rem)]"
    >
      <AmbientBirds side="left" />

      <Container className="relative z-1">
        <SectionIndex number="02" label="Experience" aside="Current role" />

        <div className="grid grid-cols-[0.85fr_1.15fr] gap-[6vw] pt-10 max-md:grid-cols-1 max-md:gap-8 max-md:pt-8">
          {/* left: sticky title */}
          <div className="sticky top-28 self-start max-md:static">
            <Eyebrow>Work history</Eyebrow>
            <Display className="mt-4 text-[length:clamp(2.6rem,4.2vw,4.4rem)]">
              Building products and <em>leading development.</em>
            </Display>
          </div>

          {/* right: the curved route line + job cards */}
          <div className="relative pl-20 before:absolute before:top-4 before:bottom-10 before:left-4 before:w-20 before:rounded-tl-[4rem] before:border-t before:border-l before:border-[color:var(--alpine-400)] before:content-[''] max-md:pl-10 max-md:before:w-10">
            <ApiStatus loading={loading} error={error} empty={!loading && !error && experience.length === 0} />

            {experience.map((item, i) => (
              <article
                key={item._id}
                className={`relative rounded-[3rem_1rem_3rem_1rem] border border-[rgb(255_245_235/48%)] bg-[linear-gradient(145deg,rgb(231_213_197/92%),rgb(202_178_157/84%))] p-8 shadow-[0_1.5rem_4rem_rgb(70_35_25/15%)] transition-[translate,rotate,box-shadow] duration-[350ms] ease-[cubic-bezier(0.2,0.75,0.25,1)] hover:-translate-y-2 hover:-rotate-[0.5deg] hover:shadow-[0_2rem_5rem_rgb(30_67_116/18%)] max-md:rounded-[2rem_0.75rem_2rem_0.75rem] max-md:p-6 ${
                  i > 0 ? 'mt-6 pt-10' : ''
                }`}
              >
                {/* numbered dot sitting on the route line */}
                <span
                  className={`absolute -left-20 z-2 grid aspect-square w-8 place-items-center rounded-full bg-(--alpine-800) font-mono text-[0.52rem] text-snow shadow-[0_0_0_0.5rem_#dcc6b2] max-md:-left-10 ${
                    i > 0 ? 'top-10' : 'top-0'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-1 mb-5 grid aspect-square w-16 place-items-center overflow-hidden rounded-2xl border border-[rgb(70_35_25/28%)] bg-snow shadow-[0_0.8rem_2rem_rgb(22_61_119/12%)]">
                  {item.logo ? (
                    <img className="size-[72%] object-contain" src={item.logo} alt={item.logoAlt} />
                  ) : (
                    <span className="font-mono text-sm font-medium tracking-[-0.06em]">
                      {item.initials}
                    </span>
                  )}
                </div>

                <p className="m-0 font-mono text-[0.75rem] font-medium tracking-[0.08em] uppercase">
                  {item.years}
                </p>
                <h3 className="mt-3 mb-1 text-[length:clamp(2rem,3vw,3rem)] leading-[1.05] font-light tracking-[-0.035em]">
                  {item.company}
                </h3>
                <p className="m-0 font-mono text-[length:clamp(0.74rem,0.9vw,0.86rem)] leading-normal tracking-[0.08em] text-(--alpine-600) uppercase">
                  {item.role}
                </p>
                <p className="relative z-1 mt-4 mb-0 max-w-120 text-[0.82rem] leading-[1.7] text-[#765344]">
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
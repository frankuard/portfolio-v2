import React from 'react'
import Container from '../../components/ui/Container'
import ApiStatus from '../../components/ui/ApiStatus'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import useApi from '../../hooks/useApi'

const Education = () => {
  const { data: education, loading, error } = useApi('/api/education')

  return (
    <section
      id="education"
      className="reveal relative bg-[linear-gradient(150deg,#e0ccb9,#d3b9a3)] py-[clamp(3.5rem,6vw,6rem)]"
    >
      <AmbientBirds side="right" />

      <Container className="relative z-1">
        <SectionIndex number="04" label="Education" aside="Academics" />

        <div className="pt-6 max-md:pt-4">
          <ApiStatus
            loading={loading}
            error={error}
            empty={!loading && !error && education.length === 0}
          />

          {education.map((item) => (
            <article
              key={item._id}
              className="grid grid-cols-[12rem_1fr] gap-8 border-b border-line py-7 max-md:grid-cols-1 max-md:gap-2 max-md:py-5"
            >
              <p className="m-0 pt-2 font-mono text-[0.78rem] font-medium tracking-[0.08em] text-(--alpine-600) uppercase">
                {item.years}
              </p>

              <div>
                <h3 className="m-0 text-[length:clamp(1.6rem,2.4vw,2.4rem)] leading-[1.1] font-light tracking-[-0.03em]">
                  {item.degree}
                </h3>
                <p className="mt-2 mb-0 font-mono text-[0.8rem] tracking-[0.08em] uppercase">
                  {item.institution}
                </p>
                {item.description && (
                  <p className="mt-3 mb-0 max-w-xl text-[0.85rem] leading-[1.7] text-[#765344]">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Education
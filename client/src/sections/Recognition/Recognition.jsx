import React from 'react'
import Container from '../../components/ui/Container'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import ApiStatus from '../components/ui/ApiStatus'
import useApi from '../../hooks/useApi'

const Recognition = () => {
  const { data: recognitions, loading, error } = useApi('/api/recognitions')
  return (
    <section
      id="recognition"
      className="reveal relative bg-[linear-gradient(155deg,#d5bda9,#c7aa93)] py-[clamp(3.5rem,6vw,6rem)] text-ink"
    >
      <AmbientBirds side="right" />

      <Container className="relative z-1">
        <SectionIndex number="03" label="Recognition" />

        <div
          className="w-full pt-10 max-md:pt-8"
          aria-label="Recognition highlights"
        >
          <ApiStatus loading={loading} error={error} empty={!loading && !error && recognitions.length === 0} />

          <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
            {recognitions.map((item, index) => (
              <article
                key={item._id}
                className="relative min-h-72 rounded-[1.25rem] border border-[rgb(70_35_25/28%)] bg-[rgb(226_205_187/82%)] p-6 shadow-[0_1.2rem_3rem_rgb(70_35_25/10%)] max-md:min-h-56"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.08em] text-(--alpine-600) uppercase">
                  {item.date}
                </span>

                <h3 className="mt-14 mb-3 max-w-72 text-[length:clamp(1.8rem,2.6vw,2.9rem)] leading-[1.08] font-light tracking-[-0.03em] max-md:mt-10">
                  {item.title}
                </h3>

                <p className="m-0 text-[0.9rem] leading-[1.7] text-[#765344]">
                  {item.description}
                </p>

                <small className="absolute right-6 bottom-6 font-mono text-[0.68rem] tracking-[0.08em] text-(--alpine-600) uppercase">
                  {String(index + 1).padStart(2, '0')}
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
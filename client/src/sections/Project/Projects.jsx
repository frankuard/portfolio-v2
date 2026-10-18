import React from 'react'
import Container from '../../components/ui/Container'
import TextLink from '../../components/ui/TextLink'
import ApiStatus from '../../components/ui/ApiStatus'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import useApi from '../../hooks/useApi'
import TechBadge from '../../components/ui/TechBadge'

const Projects = () => {
  const { data: projects, loading, error } = useApi('/api/projects')

  return (
    <section
      id="projects"
      className="reveal relative bg-[linear-gradient(145deg,#dbc7b5,#c6ab95)] py-[clamp(3.5rem,6vw,6rem)]"
    >
      <AmbientBirds side="right" />

      <Container className="relative z-1">
        <SectionIndex number="03" label="Projects" aside="Selected work" />

        <div className="pt-10 max-md:pt-8">
          <ApiStatus
            loading={loading}
            error={error}
            empty={!loading && !error && projects.length === 0}
          />

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {projects.map((item) => (
              <article
                key={item._id}
                className="group overflow-hidden rounded-[1.25rem] border border-line bg-[rgb(210_184_164/85%)] shadow-[0_1.2rem_3rem_rgb(70_35_25/10%)] transition-[translate,box-shadow] duration-[350ms] ease-[cubic-bezier(0.2,0.75,0.25,1)] hover:-translate-y-1 hover:shadow-[0_1.8rem_4rem_rgb(70_35_25/16%)]"
              >
                {/* screenshot, or a colored block with the first letters if there is no image */}
                <div className="aspect-[16/7] overflow-hidden border-b border-line">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid size-full place-items-center bg-[linear-gradient(135deg,#a85d3d,#7a3825)] font-mono text-4xl font-medium tracking-[-0.06em] text-snow">
                      {item.title
                        .split(' ')
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join('')}
                    </div>
                  )}
                </div>

                <div className="p-4 max-md:p-4">
                  <h3 className="m-0 text-[length:clamp(1.2rem,1.6vw,1.6rem)] leading-[1.1] font-light tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 mb-0 text-[0.8rem] leading-[1.6] text-[#765344]">
                    {item.description}
                  </p>

                  {item.tags?.length > 0 && (
                    <ul className="m-0 mt-3 flex list-none flex-wrap gap-1.5 p-0">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[rgb(70_35_25/40%)] px-3 py-[0.3rem] font-mono text-[0.58rem] tracking-[0.04em] uppercase"
                        >
                          <TechBadge name={tag} />
                        </li>
                      ))}
                    </ul>
                  )}

                  {(item.liveUrl || item.githubUrl) && (
                    <div className="mt-4 flex flex-wrap gap-5">
                      {item.liveUrl && (
                        <TextLink href={item.liveUrl} target="_blank" rel="noreferrer">
                          Live demo
                        </TextLink>
                      )}
                      {item.githubUrl && (
                        <TextLink href={item.githubUrl} target="_blank" rel="noreferrer">
                          GitHub
                        </TextLink>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
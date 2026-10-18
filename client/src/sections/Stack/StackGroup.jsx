import React from 'react'
import Display from '../../components/ui/Display'

const StackGroup = ({ group }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-[rgb(207_181_158/38%)]">
      {/* header: number + title + description */}
      <div className="grid grid-cols-[4rem_1fr] gap-4 border-b border-line px-8 py-6 max-md:grid-cols-[2.5rem_1fr] max-md:p-5">
        <span className="pt-1 font-mono text-[0.58rem] text-(--alpine-600)">{group.id}</span>
        <div>
          <Display as="h3" className="text-[length:2rem] leading-none tracking-[-0.03em]">
            {group.name}
          </Display>
          <p className="mt-[0.45rem] mb-0 max-w-xl text-[0.76rem] leading-[1.6] text-[#765344]">
            {group.copy}
          </p>
        </div>
      </div>

      {/* the map scrolls sideways inside the card on small screens */}
      <div className="overflow-x-auto">
        <div className="relative flex h-64 min-w-208 items-center justify-around px-12 max-md:min-w-168">
          {/* the glowing bus line, with a dot on each end and a label in the middle */}
          <div
            className="absolute top-1/2 right-16 left-16 h-0.5 bg-(--sky-700) shadow-[0_0_1rem_rgb(36_91_158/28%)] before:absolute before:top-1/2 before:-left-[0.7rem] before:aspect-square before:w-[0.7rem] before:-translate-y-1/2 before:rounded-full before:border-2 before:border-[color:var(--sky-700)] before:bg-[#d8c1ae] before:content-[''] after:absolute after:top-1/2 after:-right-[0.7rem] after:aspect-square after:w-[0.7rem] after:-translate-y-1/2 after:rounded-full after:border-2 after:border-[color:var(--sky-700)] after:bg-[#d8c1ae] after:content-['']"
            aria-hidden="true"
          >
            <span className="absolute top-[0.8rem] left-1/2 -translate-x-1/2 bg-[#d8c1ae] px-[0.6rem] py-[0.35rem] font-mono text-[0.5rem] text-(--alpine-600) uppercase">
              {group.name.replace(' stack', '')}.bus
            </span>
          </div>

          {group.nodes.map((node, i) => {
            const below = i % 2 === 0 // even boxes hang below the bus, odd ones above

            return (
              <div
                key={node.name}
                className={`relative z-2 flex w-42 items-center gap-[0.85rem] rounded-[0.8rem] border border-line bg-snow p-3 shadow-[0_1rem_2.5rem_rgb(91_45_27/10%)] ${
                  below ? 'translate-y-16' : '-translate-y-16'
                }`}
              >
                {/* the little wire from the box to the bus */}
                <div
                  className={`absolute left-1/2 h-[3.9rem] w-px bg-(--sky-700) after:absolute after:left-1/2 after:aspect-square after:w-[0.55rem] after:-translate-x-1/2 after:rounded-full after:bg-(--sky-700) after:content-[''] ${
                    below ? 'bottom-full after:-top-[0.25rem]' : 'top-full after:-bottom-[0.25rem]'
                  }`}
                  aria-hidden="true"
                />

                <div className="grid aspect-square w-[2.8rem] flex-none place-items-center overflow-hidden rounded-[0.6rem] border border-line bg-snow text-(--alpine-800)">
                  {node.icon ? (
                    <img className="size-[65%] object-contain" src={node.icon} alt="" />
                  ) : (
                    <span className="font-mono text-[0.85rem] font-medium">{node.mark}</span>
                  )}
                </div>

                <strong className="font-mono text-[0.68rem] font-medium">{node.name}</strong>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default StackGroup
import React from 'react'
import Container from '../../components/ui/Container'
import Display from '../../components/ui/Display'
import Eyebrow from '../../components/ui/Eyebrow'
import SectionIndex from '../../components/layout/SectionIndex'
import AmbientBirds from '../../components/effects/AmbientBirds'
import { stackGroups } from '../../data/stack'
import StackGroup from './StackGroup'

const Stack = () => {
  return (
    <section
      id="stack"
      className="reveal relative bg-[linear-gradient(145deg,#d8c3b0,#c3a790)] py-[clamp(3.5rem,6vw,6rem)]"
    >
      <AmbientBirds side="left" />

      <Container className="relative z-1">
        <SectionIndex number="06" label="Technology stack" aside="Core tools" />

        <div className="flex items-end justify-between gap-12 pt-10 pb-8 max-md:flex-col max-md:items-start max-md:gap-6 max-md:py-8">
          <div>
      
            <Display className="mt-4 max-w-208 text-[length:clamp(2.6rem,4.8vw,5rem)]">
              Tools I use to <em>ship products.</em>
            </Display>
          </div>
          <p className="m-0 max-w-88 text-[0.82rem] leading-[1.75] text-[#4a2418]">
            A full-stack workflow from interface development to data, infrastructure, and delivery.
          </p>
        </div>

        <div className="grid gap-5">
          {stackGroups.map((group) => (
            <StackGroup key={group.name} group={group} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stack
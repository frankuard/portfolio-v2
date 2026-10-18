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
      className="reveal relative bg-[linear-gradient(145deg,#e5d5c6,#d2baa5)] py-[clamp(6rem,10vw,10rem)]"
    >
      <AmbientBirds side="left" />

      <Container className="relative z-1">
        <SectionIndex number="04" label="Technology stack" aside="Core tools" />

        <div className="flex items-end justify-between gap-12 pt-22 pb-12 max-md:flex-col max-md:items-start max-md:py-16">
          <div>
            <Eyebrow>Development workflow</Eyebrow>
            <Display className="mt-6 max-w-208">
              Tools I use to <em>ship products.</em>
            </Display>
          </div>
          <p className="m-0 max-w-88 text-[0.82rem] leading-[1.75] text-[#765344]">
            A full-stack workflow from interface development to data, infrastructure, and delivery.
          </p>
        </div>

        <div className="grid gap-8">
          {stackGroups.map((group) => (
            <StackGroup key={group.name} group={group} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stack
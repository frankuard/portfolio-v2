import React from 'react'

// <SectionIndex number="01" label="About" aside="Profile" />
// Add `light` for dark backgrounds (used in the contact footer).
const SectionIndex = ({ number, label, aside, light = false }) => {
  return (
    <div
      className={`grid grid-cols-[5rem_1fr_auto] items-center border-b pb-[1.8rem] font-mono text-[clamp(0.9rem,1vw,1.08rem) leading-[1.4] font-medium tracking-[0.08em] uppercase max-md:grid-cols-[3rem_1fr] ${
        light ? 'border-white/25' : 'border-line'
      }`}
    >
      <span>{number}</span>
      <span>{label}</span>
      {aside && <span className="max-md:hidden">{aside}</span>}
    </div>
  )
}

export default SectionIndex
import React, { useState } from 'react'
import IconButton from '@/components/ui/IconButton'

const links = ['About', 'Experience', 'Recognition', 'Stack', 'Contact']

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-30 flex w-full items-center justify-between px-14 py-6 text-snow max-md:p-[1.2rem]">
      <a
        className="grid size-[2.8rem] place-items-center rounded-full border border-white/55"
        href="#top"
        aria-label="Back to top"
      >
        <svg className="w-[1.55rem]" viewBox="0 0 38 38" aria-hidden="true">
          <path d="m4 29 10-16 5 8 4-6 11 14M10 29h18" />
        </svg>
      </a>

      <nav
        aria-label="Primary navigation"
        className={`flex gap-[2.2rem] text-[0.72rem]
          max-md:fixed max-md:inset-0 max-md:flex-col max-md:items-center max-md:justify-center
          max-md:gap-4 max-md:bg-alpine-950 max-md:text-[2.2rem] max-md:font-light
          max-md:transition-all max-md:duration-250
          ${menuOpen ? 'max-md:visible max-md:opacity-100' : 'max-md:invisible max-md:opacity-0'}`}
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
          >
            {item}
          </a>
        ))}
      </nav>

      <IconButton
        className="relative z-2 hidden size-[2.8rem] flex-col justify-center gap-[0.4rem] max-md:flex"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <span className="block h-px w-full bg-current" />
        <span className="block h-px w-full bg-current" />
      </IconButton>
    </header>
  )
}

export default SiteNav
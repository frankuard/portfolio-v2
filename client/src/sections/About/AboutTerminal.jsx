import React from 'react'
import useTilt from '../../hooks/useTilt'
import './About.css'

const commands = [
  { cmd: 'POST /api/projects', result: '201 created · 84ms' },
  { cmd: 'docker compose up -d', result: '3 services running' },
  { cmd: 'pnpm build', result: 'compiled successfully', cursor: true },
]

const AboutTerminal = () => {
  const { ref, onPointerMove, onPointerLeave } = useTilt()

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-label="Interactive developer terminal"
      className="relative w-[min(31rem,100%)] self-center rounded-2xl border border-[rgb(255_224_198/20%)] bg-[#291816] font-mono text-[#ffe9d7] shadow-[-1.2rem_1.2rem_0_#e8c9ad,0_2.5rem_5rem_rgb(83_39_24/22%)] [--terminal-rotate-x:4deg] [--terminal-rotate-y:-8deg] [transform-style:preserve-3d] [transform:perspective(50rem)_rotateX(var(--terminal-rotate-x))_rotateY(var(--terminal-rotate-y))] [transition:transform_160ms_ease-out,box-shadow_350ms_cubic-bezier(0.2,0.75,0.25,1)] hover:shadow-[-0.6rem_0.8rem_0_#e8c9ad,0_3rem_6rem_rgb(83_39_24/28%)] max-md:min-h-88 max-md:[transform:none]"
    >
      {/* title bar with three dots */}
      <div className="flex items-center gap-[0.35rem] rounded-t-2xl border-b border-white/14 bg-white/6 px-[0.7rem] py-[0.55rem]">
        <span className="size-[0.45rem] rounded-full bg-[#d66d4c]" />
        <span className="size-[0.45rem] rounded-full bg-[#f1b36f]" />
        <span className="size-[0.45rem] rounded-full bg-[#9a432f]" />
        <code className="ml-auto text-[0.48rem] text-[#daa88f]">dev@local:~/workspace</code>
      </div>

      <div className="min-h-72 p-8">
        {commands.map((item, i) => (
          <React.Fragment key={item.cmd}>
            <p className={`m-0 mb-1 text-[0.68rem] leading-normal text-[#c69279] ${i > 0 ? 'mt-[0.65rem]' : ''}`}>
              <span className="text-sun">›</span> {item.cmd}
            </p>
            <strong className="mb-[1.35rem] block text-[0.78rem] font-normal text-[#fff3e9]">
              {item.result}
              {item.cursor && (
                <span className="animate-[cursor-blink_1s_steps(1)_infinite] text-sun">_</span>
              )}
            </strong>
          </React.Fragment>
        ))}
      </div>

      {/* dashed orbit ring behind the card */}
      <span
        className="absolute -inset-8 -z-10 animate-[terminal-orbit_18s_linear_infinite] rounded-full border border-dashed border-[color:var(--alpine-400)] max-md:hidden"
        aria-hidden="true"
      />
    </div>
  )
}

export default AboutTerminal
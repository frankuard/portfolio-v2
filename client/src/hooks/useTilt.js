import { useRef } from 'react'

// Tilts an element toward the mouse by setting two CSS variables.
// Usage: const { ref, onPointerMove, onPointerLeave } = useTilt()
const useTilt = () => {
  const ref = useRef(null)

  const onPointerMove = (event) => {
    const el = ref.current
    if (!el) return
    const bounds = el.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    el.style.setProperty('--terminal-rotate-x', `${y * -9}deg`)
    el.style.setProperty('--terminal-rotate-y', `${x * 12}deg`)
  }

  const onPointerLeave = () => {
    ref.current?.style.removeProperty('--terminal-rotate-x')
    ref.current?.style.removeProperty('--terminal-rotate-y')
  }

  return { ref, onPointerMove, onPointerLeave }
}

export default useTilt
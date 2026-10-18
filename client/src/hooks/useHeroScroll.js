import { useEffect } from 'react'

// As you scroll, the hero fades/lifts and the mountains slide down.
// It only sets CSS variables on the hero element; hero.css does the visuals.
const useHeroScroll = (ref) => {
  useEffect(() => {
    const hero = ref.current
    if (!hero) return

    let frame = 0

    const update = () => {
      frame = 0
      const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.82)))
      hero.style.setProperty('--hero-progress', progress.toFixed(3))
      hero.style.setProperty('--hero-fade', (1 - progress).toFixed(3))
      hero.style.setProperty('--hero-lift', `${progress * -80}px`)
      hero.style.setProperty('--hero-slide', `${progress * 80}px`)
      hero.style.setProperty('--mountain-shift', `${progress * 112}px`)
      hero.style.setProperty('--hero-scale', (1 - progress * 0.035).toFixed(3))
      hero.style.setProperty('--mountain-scale', (1 + progress * 0.06).toFixed(3))
      hero.style.setProperty('--mountain-fade', (1 - progress * 0.7).toFixed(3))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ref])
}

export default useHeroScroll
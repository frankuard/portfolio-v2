import { useEffect } from 'react'

// Adds the class "is-visible" to any element with class "reveal"
// once it scrolls into view. The fade/slide itself is CSS (index.css).
const useReveal = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

export default useReveal
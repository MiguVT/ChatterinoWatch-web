import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const toggleVisibility = () => {
      // Debounce for better performance
      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 400)
      }, 100)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 cursor-pointer group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp
        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
        aria-hidden="true"
      />
    </button>
  )
}

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

    const handleScroll = () => {
      // Debounce for better performance
      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20)
      }, 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 5, 20, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' : 'none',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 cursor-pointer group bg-transparent border-none p-0"
              aria-label="Scroll to top"
            >
              <img
                src="/icon.svg"
                alt="ChatterinoWatch Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl sm:text-2xl font-bold">
                <span className="gradient-text group-hover:opacity-80 transition-opacity">
                  ChatterinoWatch
                </span>
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              aria-label="Go to features section"
            >
              Features
            </a>
            <a
              href="#installation"
              className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              aria-label="Go to installation section"
            >
              Installation
            </a>
            <a
              href="#setup"
              className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              aria-label="Go to setup section"
            >
              Setup
            </a>
            <a
              href="https://github.com/MiguVT/ChatterinoWatch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer"
              aria-label="Visit GitHub repository (opens in new tab)"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

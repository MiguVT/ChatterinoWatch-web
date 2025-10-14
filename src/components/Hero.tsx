import { useBrowserDetection } from '../hooks/useBrowserDetection'
import { FaCheck, FaChevronDown, FaExclamationTriangle } from 'react-icons/fa'

export default function Hero() {
  const { type, name, storeUrl, platformWarning } = useBrowserDetection()

  const browsers = [
    {
      type: 'chrome' as const,
      name: name && type === 'chrome' ? name : 'Chrome',
      storeUrl:
        storeUrl || 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
      detected: type === 'chrome',
    },
    {
      type: 'firefox' as const,
      name: name && type === 'firefox' ? name : 'Firefox',
      storeUrl: storeUrl || 'https://addons.mozilla.org/en-US/firefox/addon/chatterinowatch/',
      detected: type === 'firefox',
    },
  ]

  const badges = [
    { id: 'sync', label: 'Automatic Sync' },
    { id: 'privacy', label: 'Privacy Focused' },
    { id: 'opensource', label: 'Open Source' },
  ]

  // Sort: detected browser first
  const sortedBrowsers = [...browsers].sort((a, b) => {
    if (a.detected === b.detected) return 0
    return a.detected ? -1 : 1
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-[gradient-shift] bg-[length:200%_200%]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-[float]" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-[float] animation-delay-2000"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-[fade-in]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight">
            Watch<span className="gradient-text"> Twitch</span>
            <br />
            Your Way
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-[slide-up] animation-delay-200"
            style={{ animationDelay: '0.2s' }}
          >
            Automatically sync <span className="text-primary font-semibold">Chatterino</span> to
            show which Twitch streamer you're currently watching. No manual channel selection
            needed!
          </p>

          {/* Enhanced feature badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-14 px-4 animate-[slide-up] animation-delay-400"
            style={{ animationDelay: '0.4s' }}
          >
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 glass-effect rounded-full hover:scale-105 transition-transform duration-300"
              >
                <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" aria-hidden="true" />
                <span className="text-sm sm:text-base font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Platform warning */}
          {platformWarning && (
            <div
              className="max-w-2xl mx-auto mb-8 px-4 animate-[slide-up] animation-delay-500"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="glass-effect rounded-xl p-4 border border-yellow-500/30 bg-yellow-500/5">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle
                    className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base text-gray-300">{platformWarning}</p>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced browser-specific CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 animate-[slide-up] animation-delay-600"
            style={{ animationDelay: '0.6s' }}
          >
            {sortedBrowsers.map((browser, index) => (
              <a
                key={browser.type}
                href={browser.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 cursor-pointer w-full sm:w-auto max-w-xs ${
                  browser.detected
                    ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105'
                    : 'glass-effect hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-102'
                }`}
                aria-label={`Install for ${browser.name} ${
                  browser.detected ? '(detected browser)' : ''
                }`}
              >
                {browser.detected && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full whitespace-nowrap animate-[bounce-subtle]">
                    Recommended
                  </span>
                )}
                <span className="relative z-10">Install for {browser.name}</span>
                {browser.detected && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 sm:mt-20 animate-[bounce-subtle]">
            <a
              href="#features"
              className="inline-flex flex-col items-center text-gray-400 hover:text-primary transition-colors duration-300 group"
              aria-label="Scroll to features"
            >
              <span className="text-sm mb-2 font-medium">Discover More</span>
              <FaChevronDown
                className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

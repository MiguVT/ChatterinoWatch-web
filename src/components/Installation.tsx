import { FaCheckCircle, FaEdge, FaExternalLinkAlt } from 'react-icons/fa'
import { SiBrave, SiFirefox, SiGooglechrome, SiOpera, SiVivaldi } from 'react-icons/si'
import { useBrowserDetection } from '../hooks/useBrowserDetection'

// Map icon names to actual icon components
const iconMap: Record<string, React.ReactNode> = {
  SiGooglechrome: <SiGooglechrome className="w-8 h-8 text-white" />,
  SiFirefox: <SiFirefox className="w-8 h-8 text-white" />,
  SiBrave: <SiBrave className="w-8 h-8 text-white" />,
  FaEdge: <FaEdge className="w-8 h-8 text-white" />,
  SiOpera: <SiOpera className="w-8 h-8 text-white" />,
  SiVivaldi: <SiVivaldi className="w-8 h-8 text-white" />,
}

export default function Installation() {
  const { type, name, storeUrl, iconName } = useBrowserDetection()

  // Get the appropriate icon
  const detectedIcon = iconMap[iconName] || iconMap.SiGooglechrome

  const browsers = [
    {
      type: 'chrome' as const,
      name: name && type === 'chrome' ? name : 'Chrome',
      icon: type === 'chrome' ? detectedIcon : <SiGooglechrome className="w-8 h-8 text-white" />,
      storeUrl:
        type === 'chrome' && storeUrl
          ? storeUrl
          : 'https://chromewebstore.google.com/detail/pnpdojeoploiomepdhikamokjmapkimh',
      storeName: 'Chrome Web Store',
      detected: type === 'chrome',
    },
    {
      type: 'firefox' as const,
      name: name && type === 'firefox' ? name : 'Firefox',
      icon: type === 'firefox' ? detectedIcon : <SiFirefox className="w-8 h-8 text-white" />,
      storeUrl:
        type === 'firefox' && storeUrl
          ? storeUrl
          : 'https://addons.mozilla.org/en-US/firefox/addon/chatterinowatch/',
      storeName: 'Firefox Add-ons',
      detected: type === 'firefox',
    },
  ]

  // Sort: detected browser first
  const sortedBrowsers = [...browsers].sort((a, b) => {
    if (a.detected === b.detected) return 0
    return a.detected ? -1 : 1
  })

  return (
    <section id="installation" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-[fade-in]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
              <span className="gradient-text">Quick Installation</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              Get started in less than a minute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {sortedBrowsers.map((browser, index) => (
              <div
                key={browser.type}
                className={`relative glass-effect rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 animate-[slide-up] ${
                  browser.detected
                    ? 'ring-2 ring-primary shadow-[0_0_30px_rgba(192,132,252,0.3)]'
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {browser.detected && (
                  <div className="absolute -top-3 -right-3 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg animate-[scale-up]">
                    <FaCheckCircle className="w-4 h-4 text-white" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white">Detected</span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                    {browser.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{browser.name}</h3>
                    <p className="text-sm text-gray-300">{browser.storeName}</p>
                  </div>
                </div>

                <ol className="space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">
                      1
                    </span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Visit the {browser.storeName}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">
                      2
                    </span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Click "Add to {browser.type === 'chrome' ? 'Chrome' : 'Firefox'}"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">
                      3
                    </span>
                    <span className="text-sm sm:text-base text-gray-300">
                      Start watching streams in Chatterino!
                    </span>
                  </li>
                </ol>

                <a
                  href={browser.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                    browser.detected
                      ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_rgba(192,132,252,0.5)]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={`Install on ${browser.name}`}
                >
                  <span>Install on {browser.name}</span>
                  <FaExternalLinkAlt
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

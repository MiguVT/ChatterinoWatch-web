import { useState } from 'react'
import { FaCheck, FaCopy } from 'react-icons/fa'
import { useBrowserDetection } from '../hooks/useBrowserDetection'

export default function ChatterinoSetup() {
  const { type } = useBrowserDetection()
  const [copied, setCopied] = useState(false)

  const isFirefox = type === 'firefox'
  const extensionId = isFirefox
    ? 'chatterino-watch@chatterinowatch.miguvt.com'
    : 'pnpdojeoploiomepdhikamokjmapkimh'

  const browserName = isFirefox ? 'Firefox' : 'Chrome'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(extensionId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Silent fail - clipboard might not be available in some contexts
      setCopied(false)
    }
  }

  return (
    <section id="setup" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-[fade-in]">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
              <span className="gradient-text">Chatterino Setup</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4">
              One-time configuration for seamless integration
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-6 sm:p-10 animate-[slide-up]">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                    Open Chatterino Settings
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Launch Chatterino and navigate to{' '}
                    <span className="text-primary font-semibold">
                      Settings → Browser Integration
                    </span>
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                    Add Extension ID
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    Under{' '}
                    <span className="text-primary font-semibold">"Additional extension IDs"</span>,
                    add this ID:
                  </p>

                  <div className="relative group">
                    <div
                      className={`glass-effect rounded-xl p-5 sm:p-5 font-mono text-sm sm:text-base border transition-colors duration-300 break-all ${
                        isFirefox
                          ? 'text-secondary border-secondary/30 group-hover:border-secondary/50'
                          : 'text-primary border-primary/30 group-hover:border-primary/50'
                      }`}
                    >
                      {extensionId}
                    </div>
                    <button
                      onClick={handleCopy}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer group/btn ${
                        isFirefox
                          ? 'bg-secondary/20 hover:bg-secondary/30'
                          : 'bg-primary/20 hover:bg-primary/30'
                      }`}
                      aria-label={
                        copied ? 'Copied to clipboard' : `Copy ${browserName} extension ID`
                      }
                    >
                      {copied ? (
                        <>
                          <FaCheck
                            className="w-4 h-4 text-green-400 animate-[scale-up]"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-semibold text-green-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <FaCopy
                            className="w-4 h-4 text-gray-300 group-hover/btn:text-white transition-colors"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-semibold text-gray-300 group-hover/btn:text-white transition-colors">
                            Copy
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-300 mt-3">
                    {isFirefox
                      ? 'For Firefox, LibreWolf or other Firefox-based browsers'
                      : 'For Chrome, Edge, Brave, Opera, Vivaldi or other Chromium-based browsers'}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Save and Enjoy!</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Click <span className="text-primary font-semibold">OK</span> to save your
                    settings. You're all set! The extension will now automatically report the Twitch
                    channel you're watching to Chatterino.
                  </p>
                </div>
              </div>
            </div>

            {/* Pro Tip Box */}
            <div className="mt-8 sm:mt-10 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-5 sm:p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 -mt-1.25">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Pro Tip
                      </span>
                      <span className="text-yellow-400 text-xl">✨</span>
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      After setup, whenever you watch a stream on Twitch, ChatterinoWatch will
                      automatically sync the channel to Chatterino.{' '}
                      <span className="font-semibold text-blue-300">No manual action needed!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

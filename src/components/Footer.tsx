export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 sm:py-20 border-t border-primary/20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-darker/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-10">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4">
              <button
                className="flex items-center gap-3 group cursor-pointer bg-transparent border-none p-0 hover:opacity-90 transition-opacity"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
              >
                <img
                  src="/icon.svg"
                  alt="ChatterinoWatch"
                  className="w-9 h-9 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="text-xl font-bold gradient-text">ChatterinoWatch</span>
              </button>
              <p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
                Seamlessly sync Chatterino with your active Twitch stream. Privacy-first,
                lightning-fast.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-5 pl-2">
                Navigate
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#installation"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>Installation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#setup"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>Setup Guide</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-5 pl-2">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/MiguVT/ChatterinoWatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MiguVT/ChatterinoWatch/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>Issues</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MiguVT/ChatterinoWatch/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>License</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-5 pl-2">
                Connect
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/MiguVT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary/70 transition-all duration-200 group-hover:w-4" />
                    <span>@MiguVT</span>
                  </a>
                </li>
                <li>
                  <span className="text-gray-300 text-xs pl-2">Open Source</span>
                </li>
                <li>
                  <span className="text-gray-300 text-xs pl-2">MIT Licensed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="relative mb-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/15" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-xs text-primary/60">✦</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
            <p className="flex items-center gap-2">
              <span>© {currentYear}</span>
              <span className="text-primary/50">•</span>
              <span>ChatterinoWatch</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-300">Crafted by</span>
              <a
                href="https://github.com/MiguVT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-200 font-semibold"
              >
                MiguVT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { FaBolt, FaChartBar, FaClock, FaGlobe, FaShieldAlt, FaSync } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      id: 'auto-detect',
      icon: FaBolt,
      title: 'Automatic Detection',
      description:
        "Automatically detects which Twitch channel you're watching and syncs it to Chatterino in real-time.",
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'realtime',
      icon: FaSync,
      title: 'Real-Time Sync',
      description:
        "Chatterino automatically shows the chat for the stream you're watching. Switch streams and it follows instantly.",
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'cross-browser',
      icon: FaGlobe,
      title: 'Cross-Browser',
      description:
        'Works on Chrome, Firefox, Edge, Brave, Opera, and more. Manifest V3 compliant for future compatibility.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'privacy',
      icon: FaShieldAlt,
      title: 'Privacy First',
      description:
        'No tracking, no analytics, no data collection. Open source and transparent. Your privacy is our priority.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'lightweight',
      icon: FaChartBar,
      title: 'Lightweight & Fast',
      description:
        'Minimal resource usage with 95%+ test coverage. Built with TypeScript for reliability and performance.',
      gradient: 'from-red-500 to-rose-500',
    },
    {
      id: 'native-msg',
      icon: FaClock,
      title: 'Native Messaging',
      description:
        "Uses Chatterino's native messaging protocol for secure, direct communication between browser and app.",
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-[fade-in]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Everything you need for the ultimate Twitch viewing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group glass-effect rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 animate-[slide-up]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

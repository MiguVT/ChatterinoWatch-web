import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Installation from './components/Installation'
import ChatterinoSetup from './components/ChatterinoSetup'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darker via-dark to-darker text-white">
      <Navigation />
      <Hero />
      <Features />
      <Installation />
      <ChatterinoSetup />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ThankYou from './components/ThankYou/ThankYou'
import Credits from './components/Credits/Credits'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080B0A] text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ThankYou />
      <Credits />
    </main>
  )
}

export default App

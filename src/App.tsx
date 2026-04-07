import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ThankYou from './components/ThankYou/ThankYou'
import Credits from './components/Credits/Credits'

function App() {
  const [isDevMode, setIsDevMode] = useState(false)

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080B0A] text-white">
      <Navigation isDevMode={isDevMode} setIsDevMode={setIsDevMode} />
      <Hero isDevMode={isDevMode} />
      <About isDevMode={isDevMode} />
      <Projects isDevMode={isDevMode} />
      <ThankYou isDevMode={isDevMode} />
      <Credits isDevMode={isDevMode} />
    </main>
  )
}

export default App

/**
 * SurplusFunds.com — Homepage
 * Section order matches the brief:
 *   1. Hero  2. Pillars  3. Ecosystem  4. Products
 *   5. Founder  6. Testimonials  7. TrackTool  8. Final CTA  9. Footer
 * Each section lives in its own file under /src/components for easy editing.
 */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Ecosystem from './components/Ecosystem'
import Products from './components/Products'
import Founder from './components/Founder'
import Testimonials from './components/Testimonials'
import TrackTool from './components/TrackTool'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Ecosystem />
        <Products />
        <Founder />
        <Testimonials />
        <TrackTool />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

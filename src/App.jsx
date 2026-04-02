import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import BannerSection from './components/BannerSection'
import TasteSection from './components/TasteSection'
import ImageSlider from './components/ImageSlider'
import GiftShop from './components/GiftShop'
import Events from './components/Events'
import Contact from './components/Contact'
import Awards from './components/Awards'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="texture-overlay" />
      <CustomCursor />
      
      {isLoading ? (
        <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
          <div className="text-off-white font-serif text-2xl animate-pulse">
            La Maison des Mets
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <IntroSection />
            <BannerSection />
            <TasteSection />
            <ImageSlider />
            <GiftShop />
            <Events />
            <Contact />
            <Awards />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App

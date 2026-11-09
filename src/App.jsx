import Gallery from './sections/Gallery'
import { useState } from 'react'
import BirthdayMessage from './sections/BirthdayMessage'
import MusicPlayer from './components/MusicPlayer'
import Footer from './sections/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, MailOpen } from 'lucide-react'
import Welcome from './sections/Welcome'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <main className="opening-page">
          <motion.div className="opening-content">
            <p className="top-label">
              <Sparkles size={16} /> A LITTLE BIRTHDAY SURPRISE <Sparkles size={16} />
            </p>

            <h1 className="opening-title">Happy Birthday, My Dearest Nangi!</h1>

            <p className="opening-subtitle">
              A little surprise made with all your akka's love.
            </p>

            <div
              className="envelope"
              onClick={() => setIsOpen(true)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setIsOpen(true)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Open Kaveesha's birthday message"
            >
              <div className="envelope-back"></div>

              <div className="invitation-card">
                <Heart size={30} fill="#7652ad" color="#7652ad" />
                <p>A birthday note for my nangi</p>
                <h2>Kaveesha</h2>
                <span>with love, from your akka</span>
              </div>

              <div className="envelope-front"></div>
              <div className="envelope-flap"></div>

              <div className="wax-seal">
                <Heart size={25} fill="white" color="white" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                className="open-message"
                key="message"
                exit={{ opacity: 0 }}
              >
                <MailOpen size={19} />
                <span>Tap the envelope to open your akka's birthday surprise</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </main>
      )}

      {isOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Welcome />
    <Gallery />
    <BirthdayMessage />
    <Footer />
  </motion.div>
)}

<MusicPlayer start={isOpen} />
    </>
  )
}

export default App

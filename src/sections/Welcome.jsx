
import { motion } from 'framer-motion'
import { Heart, Sparkles, ChevronDown, MessageCircleHeart } from 'lucide-react'
import mainPhoto from '../assets/images/daisy-main.jpg'

function Welcome() {
  return (
    <section className="welcome-section">

      <div className="welcome-decor decor-one">🦋</div>
      <div className="welcome-decor decor-two">💜</div>
      <div className="welcome-decor decor-three">✨</div>
      <div className="welcome-decor decor-four">🦋</div>

      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="welcome-copy">
          <motion.div
            className="welcome-crown"
            animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            👑
          </motion.div>

          <p className="welcome-small">A LITTLE BIRTHDAY NOTE FROM YOUR AKKA</p>

          <h1 className="welcome-name">Kaveesha</h1>

          <div className="welcome-divider">
            <span></span>
            <Heart size={20} fill="#7652ad" color="#7652ad" />
            <span></span>
          </div>

          <h2 className="welcome-age">Happy 19th Birthday</h2>

          <p className="welcome-description">
            Wishing you endless happiness, love, and laughter, my dearest nangi. I am so proud
            of the person you are becoming, and I will always be here to cheer you on. Keep
            smiling and shining, little sister. 💜
          </p>

          <a className="welcome-gallery-link" href="#birthday-note">
            <MessageCircleHeart size={17} />
            A little more from my heart
          </a>
        </div>

        <motion.div
          className="welcome-portrait"
          initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ y: -7, rotate: 1 }}
        >
          <div className="welcome-portrait-frame">
            <img src={mainPhoto} alt="Kaveesha smiling in her birthday portrait" />
          </div>
          <div className="welcome-photo-caption">
            <Sparkles size={16} />
            <span>My dearest nangi</span>
            <Heart size={15} fill="currentColor" />
          </div>
          <motion.div
            className="welcome-photo-sticker"
            animate={{ y: [0, -8, 0], rotate: [-8, 3, -8] }}
            transition={{ duration: 4, repeat: Infinity }}
            aria-hidden="true"
          >
            19 <span>✨</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        className="welcome-scroll"
        href="#gallery"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.7, repeat: Infinity }}
      >
        <span>THERE'S A NOTE FOR YOU</span>
        <ChevronDown size={19} />
      </motion.a>

      <div className="welcome-bottom-decoration">
        Made with <Heart size={14} fill="#7652ad" color="#7652ad" /> for my Princess
      </div>

    </section>
  )
}

export default Welcome

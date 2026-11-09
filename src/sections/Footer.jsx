
import { Heart, Crown, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="birthday-footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Crown size={35} />

        <h2>Keep shining, my dearest Princess</h2>

        <p>
          You'll always be my little sister and one of the brightest parts of my life. Your akka
          loves you always! 💜
        </p>

        <div className="footer-decoration">
          <Sparkles />
          <Heart fill="currentColor" />
          <Sparkles />
        </div>

        <h3>With all my love, from your akka 💜</h3>

        <small>Made with love, just for Kaveesha</small>
      </motion.div>
    </footer>
  )
}

export default Footer

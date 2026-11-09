import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import sisterPhoto from '../assets/images/daisy-2.jpg'

function BirthdayMessage() {
  return (
    <section className="birthday-message-section" id="birthday-note">
      <motion.article
        className="birthday-letter"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <motion.figure
          className="birthday-memory-photo"
          initial={{ opacity: 0, y: 18, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="birthday-memory-image">
            <img src={sisterPhoto} alt="Kaveesha and her sister sharing a selfie" />
            <span className="birthday-memory-heart" aria-hidden="true">
              <Heart size={17} fill="currentColor" />
            </span>
          </div>
          <figcaption>
            <Sparkles size={14} aria-hidden="true" />
            One of my favorite moments with you
          </figcaption>
        </motion.figure>

        <div className="birthday-letter-sparkle" aria-hidden="true">
          <Sparkles size={22} />
        </div>

        <p className="birthday-letter-label">OPEN WHEN YOU NEED A SMILE</p>
        <h2>A little note for you</h2>

        <div className="birthday-letter-divider" aria-hidden="true">
          <span />
          <Heart size={17} fill="currentColor" />
          <span />
        </div>

        <div className="birthday-letter-copy">
          <p>Dear Kaveesha, my dearest Princess,</p>

          <p>
            Happy 19th birthday to my sweetest little sister! Having you as my nangi is one of
            the greatest gifts in my life, and I feel so lucky to be your akka. 💜
          </p>

          <p>
            Watching you grow into the wonderful person you are today makes me so proud. May all
            your dreams come true, and may your life always be filled with love, laughter, and
            happiness.
          </p>

          <p>
            No matter where life takes you, remember that your akka will always be here to love,
            support, and cheer you on. I love you endlessly! 💜
          </p>
        </div>

        <p className="birthday-letter-signoff">
          With all my love,
          <span>Your akka, always</span>
          <Heart size={18} fill="currentColor" />
        </p>
      </motion.article>
    </section>
  )
}

export default BirthdayMessage

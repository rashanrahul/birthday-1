
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

function getTimeLeft() {
  const target = new Date('2026-12-01T18:00:00+05:30').getTime()
  const now = Date.now()
  const difference = target - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const countdownItems = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ]

  return (
    <section className="countdown-section">

      <motion.div
        className="countdown-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Sparkles size={25} color="#7652ad" />

        <p className="countdown-label">
          THE CELEBRATION IS ALMOST HERE
        </p>

        <h2>Counting down to Kaveesha's day</h2>

        <p className="countdown-description">
          Every second brings us closer to a magical celebration!
        </p>

        {timeLeft.expired ? (
          <h3 className="birthday-started">
            Happy 19th birthday, Kaveesha! 🎂💜
          </h3>
        ) : (
          <div className="countdown-grid">
            {countdownItems.map((item, index) => (
              <motion.div
                className="countdown-card"
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <span className="countdown-number">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="countdown-unit">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        <div className="countdown-date">
          <Heart size={16} fill="#7652ad" color="#7652ad" />
          December 01, 2026 · 6:00 PM
          <Heart size={16} fill="#7652ad" color="#7652ad" />
        </div>

      </motion.div>

    </section>
  )
}

export default Countdown

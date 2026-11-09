
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Send } from 'lucide-react'

function RSVP() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('yes')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim()) return

    const attendanceText =
      attendance === 'yes'
        ? "Yes, I'll be there! 💖"
        : "Sorry, I can't come"

    const whatsappMessage = `
🎀 Kaveesha's 19th Birthday RSVP

Name: ${name}
Attendance: ${attendanceText}

Birthday Wishes:
${message || 'No message'}

🎂 Event Date: December 1, 2026
⏰ Time: 6:00 PM
`

    const whatsappURL =
      `https://wa.me/94707937390?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, '_blank')
  }

  return (
    <section className="rsvp-section">
      <motion.div
        className="rsvp-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Heart className="rsvp-heart" size={35} />

        <h2>Will You Join My Celebration?</h2>
        <p>Let Kaveesha know if you can make it! 💜</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="yes">Yes, I'll be there! 💖</option>
            <option value="no">Sorry, I can't come</option>
          </select>

          <textarea
            placeholder="Birthday wishes for Kaveesha..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">
            Send RSVP on WhatsApp <Send size={17} />
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default RSVP

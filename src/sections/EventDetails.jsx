
import { motion } from 'framer-motion'
import {
  CalendarDays,
  Clock,
  MapPin,
  Heart,
  Sparkles,
  Navigation
} from 'lucide-react'

function EventDetails() {
  return (
    <section className="event-section" id="event">

      <motion.div
        className="event-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Sparkles size={25} color="#7652ad" />

        <p className="event-label">SAVE THE DATE</p>

        <h2>Join Our Celebration</h2>

        <p className="event-description">
          You'll always be my little sister and my forever bundle of happiness. 
          Love you always! 💜
        </p>

        <div className="event-details-grid">

          <div className="event-detail-card">
            <div className="event-icon">
              <CalendarDays size={27} />
            </div>
            <span>DATE</span>
            <h3>December 01</h3>
            <p>Tuesday, 2026</p>
          </div>

          <div className="event-detail-card">
            <div className="event-icon">
              <Clock size={27} />
            </div>
            <span>TIME</span>
            <h3>6:00 PM</h3>
            <p>Evening Celebration</p>
          </div>

          <div className="event-detail-card">
            <div className="event-icon">
              <MapPin size={27} />
            </div>
            <span>VENUE</span>
            <h3>At Home</h3>
            <p>We look forward to seeing you!</p>
          </div>

        </div>

        <div className="event-location">
          <div className="event-location-heading">
            <Navigation size={20} />
            <h3>Find the Celebration</h3>
          </div>

          <div className="map-placeholder">
            <MapPin size={38} color="#7652ad" />
            <h3>Birthday Celebration Venue</h3>
            <p>Location details will be shared with guests.</p>
          </div>

          <a
            className="map-button"
            href="https://www.google.com/maps/search/?api=1&query=home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={18} />
            Open Google Maps
          </a>
        </div>

        <p className="event-thankyou">
          We would love to celebrate this special day with you!
          <Heart size={16} fill="#7652ad" color="#7652ad" />
        </p>

      </motion.div>

    </section>
  )
}

export default EventDetails

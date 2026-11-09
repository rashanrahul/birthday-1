
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

import mainPhoto from '../assets/images/daisy-main.jpg'
import photo1 from '../assets/images/daisy-1.jpg'
import photo2 from '../assets/images/daisy-2.jpg'

const photos = [
  { image: photo1, caption: 'Sweet Memories' },
  { image: photo2, caption: 'Beautiful Moments' }
]

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Sparkles size={22} color="#7652ad" />

        <p className="gallery-label">A FEW OF YOUR FAVORITE PHOTOS</p>

        <h2>The many ways you make me smile</h2>

        <p className="gallery-description">
        A little collection of the moments your akka will always treasure.
        </p>
      </motion.div>

      <motion.div
        className="main-photo-frame"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="main-photo-inner">
          <img src={mainPhoto} alt="Kaveesha holding a bouquet of flowers" />
        </div>

        <div className="photo-heart">♡</div>
      </motion.div>

      <h3 className="gallery-subheading">
        Little moments, endless smiles
      </h3>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            className="gallery-card"
            key={photo.caption}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, rotate: index % 2 === 0 ? -2 : 2 }}
          >
            <div className="gallery-image">
              <img src={photo.image} alt={photo.caption} />
            </div>

            <p>{photo.caption}</p>
            <Heart size={16} color="#7652ad" />
          </motion.div>
        ))}
      </div>

      <div className="gallery-footer">
        Made with love for My Princess <Heart size={15} fill="#7652ad" color="#7652ad" />
      </div>

    </section>
  )
}

export default Gallery

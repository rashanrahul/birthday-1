
import { useRef, useState, useEffect } from 'react'
import { Music, Pause, Play } from 'lucide-react'
import birthdayMusic from '../assets/music/birthday.mp3'

function MusicPlayer({ start }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (start && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }, [start])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Music playback failed:', error)
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} src={birthdayMusic} loop />

      <button
        className="music-button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause birthday music' : 'Play birthday music'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        <Music size={18} />
      </button>
    </>
  )
}

export default MusicPlayer

import { useRef } from "react"
import { useState } from "react"

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4
  const nextVideoRef = useRef(null)

  const handleVideoLoad = () => {
    setLoadedVideos((prev) = prev + 1)
  }

  const handleVdClick = () => {
    setHasClicked(true)

    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const getVideoSrc = (index) => `videos/hero-${index.mp4}`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path abslute-center absolute z-50 siez-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleVdClick} className="origin-center">
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

import { useSwiper } from 'swiper/react'
import buttonNext from '../../../../../pictures/button-next.png'
import buttonPrevious from '../../../../../pictures/button-previous.png'
import buttonNextRed from '../../../../../pictures/button-next-red.png'
import buttonPreviousRed from '../../../../../pictures/button-previous-red.png'
import styles from './SwiperNavBtns.module.css'
import { useState } from 'react'
import { Box } from '@mui/material'

const SwiperNavBtns = () => {
  const [arrow, setArrow] = useState(false)
  const [arrowTwo, setArrowTwo] = useState(false)
  const swiper = useSwiper()

  const handleMouseEnter = () => {
    setArrow(true)
  }

  const handleMouseLeave = () => {
    setArrow(false)
  }
  const handleMouseEnterTwo = () => {
    setArrowTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setArrowTwo(false)
  }

  return (
    <Box className={styles.navBtns}>
      <Box
        onClick={() => swiper.slidePrev()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {arrow ? (
          <img src={buttonPreviousRed} alt="prev" />
        ) : (
          <img src={buttonPrevious} alt="prev" />
        )}
      </Box>
      <Box
        onClick={() => swiper.slideNext()}
        onMouseEnter={handleMouseEnterTwo}
        onMouseLeave={handleMouseLeaveTwo}>
        {arrowTwo ? (
          <img src={buttonNextRed} alt="next" />
        ) : (
          <img src={buttonNext} alt="next" />
        )}
      </Box>
    </Box>
  )
}

export default SwiperNavBtns

import { useState } from '../../../shared/utils/reactImports'
import { useSwiper } from '../../../shared/utils/swiperImports'

import buttonNext from '../../../../assets/pictures/button-next.png'
import buttonPrevious from '../../../../assets/pictures/button-previous.png'
import buttonNextRed from '../../../../assets/pictures/button-next-red.png'
import buttonPreviousRed from '../../../../assets/pictures/button-previous-red.png'

import styles from '../ContentOfUserPage.module.scss'

const CardNavBtns = () => {
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
    <div className={styles.navBtns}>
      <div
        onClick={() => swiper.slidePrev()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {arrow ? (
          <img src={buttonPreviousRed} alt="prev" />
        ) : (
          <img src={buttonPrevious} alt="prev" />
        )}
      </div>
      <div
        onClick={() => swiper.slideNext()}
        onMouseEnter={handleMouseEnterTwo}
        onMouseLeave={handleMouseLeaveTwo}
      >
        {arrowTwo ? (
          <img src={buttonNextRed} alt="next" />
        ) : (
          <img src={buttonNext} alt="next" />
        )}
      </div>
    </div>
  )
}

export default CardNavBtns

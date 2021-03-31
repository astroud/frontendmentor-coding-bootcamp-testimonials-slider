import React from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'
import clickSfx from './pad-click.mp3' // credit: bigsoundbank.com/detail-1740-macbook-trackpad-simple-click.html

import { ButtonsWrapper, LeftButton, RightButton } from './SliderButtons.elements'

const SliderButtons = ({
  slideIndex, setSlideIndex, slideCount, large,
}) => {
  const [playSfx] = useSound(clickSfx, { volume: 0.02, playbackRate: 2, interrupt: false })

  const handleClickRight = () => {
    playSfx()
    if (slideCount - 1 === slideIndex) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }
  const handleClickLeft = () => {
    playSfx()
    if (slideIndex === 0) {
      setSlideIndex(slideCount - 1)
    } else {
      setSlideIndex(slideIndex - 1)
    }
  }

  return (
    <ButtonsWrapper large={large}>
      <LeftButton large={large} onClick={handleClickLeft} />
      <RightButton large={large} onClick={handleClickRight} />
    </ButtonsWrapper>
  )
}

SliderButtons.defaultProps = {
  large: false,
}

SliderButtons.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  setSlideIndex: PropTypes.func.isRequired,
  slideCount: PropTypes.number.isRequired,
  large: PropTypes.bool,
}

export default SliderButtons

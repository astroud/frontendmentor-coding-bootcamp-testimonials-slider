import React from 'react'
import PropTypes from 'prop-types'
import { ButtonsWrapper, LeftButton, RightButton } from './SliderButtons.elements'

const SliderButtons = ({
  slideIndex, setSlideIndex, slideCount, large,
}) => {
  const handleClickRight = () => {
    if (slideCount - 1 === slideIndex) {
      setSlideIndex(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }
  const handleClickLeft = () => {
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

import React from 'react'
import PropTypes from 'prop-types'
import { ButtonsWrapper, LeftButton, RightButton } from './SliderButtons.elements'

const SliderButtons = ({ large }) => (
  <ButtonsWrapper large={large}>
    <LeftButton large={large} />
    <RightButton large={large} />
  </ButtonsWrapper>
)

SliderButtons.defaultProps = {
  large: false,
}

SliderButtons.propTypes = {
  large: PropTypes.bool,
}

export default SliderButtons

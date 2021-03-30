import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledSlider, Quote, Byline, Name, Title, Photo,
} from './Slider.elements'
import SliderButtons from '../SliderButtons/SliderButtons'

const Slider = ({ testimonials, large }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <StyledSlider large={large}>
      <Photo src={testimonials[slideIndex].photo} large={large} />
      <SliderButtons
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        slideCount={testimonials.length}
        large={large}
      />
      <Quote large={large}>{testimonials[slideIndex].quote}</Quote>
      <Byline large={large}>
        <Name large={large}>
          {testimonials[slideIndex].name}
          <Title large={large}>{testimonials[slideIndex].title}</Title>
        </Name>

      </Byline>
    </StyledSlider>
  )
}

Slider.defaultProps = {
  large: false,
}

Slider.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    photo: PropTypes.string,
  })).isRequired,
  large: PropTypes.bool,
}

export default Slider

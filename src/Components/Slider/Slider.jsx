import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledSlider, Quote, Byline, Name, Title, Photo,
} from './Slider.elements'

const Slider = ({ testimonials, large }) => (
  <StyledSlider large={large}>
    <Photo src={testimonials[0].photo} large={large} />
    <Quote large={large}>{testimonials[0].quote}</Quote>
    <Byline large={large}>
      <Name large={large}>
        {testimonials[0].name}
        <Title large={large}>{testimonials[0].title}</Title>
      </Name>

    </Byline>
  </StyledSlider>
)

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

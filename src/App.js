import React from 'react'
import { createGlobalStyle } from 'styled-components'
import StyledWrapper from './app.elements'
import Slider from './Components/Slider/Slider'

import profileImg1 from './image-tanya.jpg'
import profileImg2 from './image-john.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    --dark-blue: hsl(240, 38%, 20%);
    --grayish-blue: hsl(240, 18%, 77%);
  }

  body {
    background: #f2f2f2;
  }
`

const TESTIMONIALS = [{
  quote: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
  name: 'Tanya Sinclair',
  title: 'UX Engineer',
  photo: profileImg1,
},
{
  quote: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  name: 'John Tarkpor',
  title: 'Junior Front-end Developer',
  photo: profileImg2,
}]

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Slider testimonials={TESTIMONIALS} large />
        <div style={{ height: '10rem' }} />
        <Slider testimonials={TESTIMONIALS.slice(1)} small />
      </StyledWrapper>
    </>
  )
}

export default App

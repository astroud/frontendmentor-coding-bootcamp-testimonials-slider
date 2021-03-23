import React from 'react'
import { createGlobalStyle } from 'styled-components'
import StyledWrapper from './app.elements'
import Slider from './Components/Slider/Slider'

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
`

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Slider />
      </StyledWrapper>
    </>
  )
}

export default App

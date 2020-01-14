import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    color: ${props => props.theme.cube.textColor};
    font-family: 'GothamPro', sans-serif;
  }
`

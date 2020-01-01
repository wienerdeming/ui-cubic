import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const defaultTheme = {
  textColor: '#36434E',
  primaryColor: '#6770E6',
  colorRed: '#FF2E63',
  colorOrange: '#F96526',
  colorYellow: '#E7A324',
  lightGreyColor: '#9AA6AC',

  hoverBackgroundColor: '#F5F6FD',
  selectBackgroundColor: '#EBECFC',

  boxShadow: '0px 10px 15px rgba(211, 216, 224, 0.5)',
  transition: 'all 300ms'
}

const inputTheme = {
  backgroundColor: '#F1F3F5',
  backgroundColorHover: '#EDEFF2',
  borderRadius: '8px',
  borderColor: '#E4E5EB',
  labelColor: '#8F9BB0',
  placeholderColor: '#AEB7C6'
}

const CubeThemeProvider = ({ children, theme }) => {
  const definedTheme = {
    cube: Object.assign({}, defaultTheme, theme),
    input: inputTheme
  }

  return <ThemeProvider theme={definedTheme}>{children}</ThemeProvider>
}

CubeThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired
}
export default CubeThemeProvider

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
export const theme = {
  boxShadow: '0px 4px 15px rgba(211, 216, 224, 0.5)',
  borderRadius: '5px',
  palette: {
    text: {
      main: '#36434E',
      light: '#9AA6AC',
    },
    primary: {
      main: '#6770E6',
      text: '#fff',
      hover: '#5761E3',
      active: '#6a67e6',
      focus: '#6a67e6'
    },
    secondary: {
      main: '#e3e7ea',
      text: '#73839c',
      hover: '#d3d7da',
      active: '#d3d7da',
      focus: '#d3d7da'
    },
    danger: {
      main: '#FF2E63',
      text: '#fff',
      hover: '#FF2E63',
      active: '#FF2E63',
      focus: '#FF2E63'
    },
    warning: {
      main: '#E7A324'
    }
  },
  input: {
    borderRadius: '10px',
    colors: {
      background: '#F1F3F5',
      hover: '#EDEFF2',
      label: '#8F9BB0',
      placeholder: '#AEB7C6',
      border: '#e0e0e0',
      icon: '#9AA6AC'
    }
  }
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

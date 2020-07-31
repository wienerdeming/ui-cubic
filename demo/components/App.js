import React from 'react'
import styled from 'styled-components'
import CubeThemeProvider from '../../src/CubeThemeProvider'
import GlobalStyles from './Styles'
import NavBar from './NavBar'
import RadioButtons from './RadioButtons'
import Checkboxes from './Checkboxes'
import Buttons from './Buttons'
import Inputs from './Inputs'
import Selects from './Selects'
import Grid from './Grid'
import Table from './Table'
import Modals from './Modals'
import Toasters from './Toasters'
import Animation from './Animation'

export const menuItems = {
  Checkboxes,
  RadioButtons,
  Buttons,
  Inputs,
  Selects,
  Grid,
  Table,
  Modals,
  Animation,
  Toasters
}

const Content = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  max-height: 100vh;
  overflow-y: auto;
  width: calc(100% - 250px);
`

const Layout = styled.div`
  font-size: 15px;
  display: flex;
  min-height: 100%;
`

const theme = {
  boxShadow: '0px 4px 15px rgba(211, 216, 224, 0.5)',
  borderRadius: '8px',
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
    borderRadius: '8px',
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
const App = props => {
  const [menu, onSelect] = React.useState('Checkboxes')
  const Component = menuItems[menu]
  return (
    <CubeThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <NavBar
          menu={menu}
          onSelect={onSelect}
        />
        <Content>
          {Component && <Component {...props} />}
        </Content>
      </Layout>
    </CubeThemeProvider>
  )
}

export default App

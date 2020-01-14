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

const App = props => {
  const [menu, onSelect] = React.useState('Checkboxes')
  const Component = menuItems[menu]
  return (
    <CubeThemeProvider>
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

import React from 'react'
import PropsTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { menuItems } from './App'

const Menu = styled.div`
  width: 250px;
  background: #F8F8FB;
  padding: 30px 30px 30px 10px;
`

const MenuItem = styled.div`
  padding: 17px 27px;
  margin-bottom: 10px;
  color: #BABABA;
  cursor: pointer;
  border-radius: 25px;
  transition: all 200ms;

  ${props => props.isActive && css`
    color: #000 !important;
    background: #EBECF2 !important;
  `}
  
  &:hover {
    color: #A2A2A2;
    background: #F0F1F7;
  }
`

const NavBar = props => {
  const { menu, onSelect } = props

  return (
    <Menu>
      {Object.keys(menuItems).map(item => (
        <MenuItem
          isActive={menu === item}
          key={item}
          onClick={() => onSelect(item)}>
          {item}
        </MenuItem>
      ))}
    </Menu>
  )
}

NavBar.propTypes = {
  onSelect: PropsTypes.func.isRequired,
  menu: PropsTypes.string.isRequired
}

export default NavBar

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MenuListItem = styled('div')`
  align-items: center;
  border-radius: ${props => props.theme.input.borderRadius};
  color: #4e546a;
  cursor: pointer;
  display: flex;
  padding: 12px 18px;
  transition: ${props => props.theme.cube.transition};
  &:hover {
    background: ${props => props.theme.cube.hoverBackgroundColor};
  }
  & svg {
    font-size: 18px;
    margin-right: 7px;
  }
`

const Component = ({ children, onClick, toggleMenu, ...rest }) => {
  const onClickMenu = event => {
    event.stopPropagation()
    if (typeof onClick === 'function') {
      toggleMenu(event)
      return onClick(event)
    }
  }

  return (
    <MenuListItem onClick={onClickMenu} {...rest}>
      {children}
    </MenuListItem>
  )
}

Component.propTypes = {
  onClick: PropTypes.func,
  toggleMenu: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Component

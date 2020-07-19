import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Portal from '../Portal'
import AnimationWrapper from '../AnimationWrapper'
import Trigger from './Trigger'

const POSITION_TOP = 'top'
const POSITION_BOTTOM = 'bottom'

const MenuList = styled('div')`
  background: #fff;
  border: 1px solid ${props => props.theme.cube.input?.colors?.border || props.theme.input.borderColor};
  border-radius: ${props => props.theme.cube.borderRadius?.md || props.theme.input.borderRadius};
  box-shadow: ${props => props.theme.cube.shadows?.md || props.theme.cube.boxShadow};
  padding: 7px;
  opacity: ${props => (props.fadeType === 'in' ? '1' : '0')};
  visibility: ${props => (props.fadeType === 'in' ? 'visible' : 'hidden')};
  position: fixed;
  min-width: 260px;
  z-index: 1100;
  transition: opacity 300ms, visibility 300ms;
`

class DropdownContent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: POSITION_BOTTOM
    }
    this.menuListRef = React.createRef()
    this.getMenuListStyles = this.getMenuListStyles.bind(this)
    this.checkMenuListViewport = this.checkMenuListViewport.bind(this)
  }

  checkMenuListViewport () {
    setTimeout(() => {
      const menu = this.menuListRef.current
      const menuBounds = menu ? menu.getBoundingClientRect() : {}
      const fits =
        menuBounds.top >= 0 &&
        menuBounds.left >= 0 &&
        menuBounds.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        menuBounds.bottom <= (window.innerHeight || document.documentElement.clientHeight)

      if (fits) return null

      return this.setState({
        position: POSITION_TOP
      })
    }, 20)
  }

  getMenuListStyles () {
    const { triggerBounds } = this.props
    const { position } = this.state

    const menuList = this.menuListRef.current
    const menuListBounds = menuList ? menuList.getBoundingClientRect() : {}
    const menuListWidth = menuListBounds.width || 0

    const OFFSET_VALUE = 7
    const leftPosition = triggerBounds.left + triggerBounds.width - menuListWidth

    if (position === POSITION_TOP) {
      return {
        top: triggerBounds.top - menuListBounds.height - OFFSET_VALUE,
        left: leftPosition
      }
    }
    return {
      top: triggerBounds.top + triggerBounds.height + OFFSET_VALUE,
      left: leftPosition
    }
  }

  render () {
    const {
      open,
      triggerBounds,
      toggleMenu,
      children,
      trigger: TriggerComponent = Trigger,
      triggerRef,
      fadeType,
      isRendered,
      backgroundColor,
      dotColor,
      ...defaultProps
    } = this.props

    const menuListStyles = this.getMenuListStyles()

    return (
      <React.Fragment>
        <TriggerComponent
          data-cy="dropdown-trigger"
          isOpen={open}
          ref={triggerRef}
          onClick={event => {
            toggleMenu(event)
            this.checkMenuListViewport()
          }}
          mode={defaultProps.mode}
          backgroundColor={backgroundColor}
          dotColor={dotColor}
        />
        {isRendered && (
          <Portal>
            <MenuList ref={this.menuListRef} fadeType={fadeType} style={menuListStyles}>
              {React.Children.map(children, (child, key) => {
                if (child) {
                  return React.cloneElement(child, { key, toggleMenu, ...child.props })
                }
              })}
            </MenuList>
          </Portal>
        )}
      </React.Fragment>
    )
  }
}

DropdownContent.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  triggerBounds: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  trigger: PropTypes.object,
  triggerRef: PropTypes.object.isRequired,
  fadeType: PropTypes.oneOf([null, 'in', 'out']),
  isRendered: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
  dotColor: PropTypes.string,
}

export default AnimationWrapper(DropdownContent)

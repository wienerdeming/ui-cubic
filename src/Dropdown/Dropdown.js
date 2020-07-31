import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DropdownContent from './DropdownContent'

const Root = styled('div')`
  display: block;
  position: relative;
  margin-left: auto;
  width: max-content;
`

const Dropdown = props => {
  const { trigger, backgroundColor, dotColor, ...rest } = props


  const [isOpen, _setIsOpen] = useState(false)
  const isOpenRef = useRef(isOpen)

  const setIsOpen = state => {
    isOpenRef.current = state
    _setIsOpen(state)
  }
  const [triggerBounds, setTriggerBounds] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 0,
    width: 0
  })

  const wrapperRef = useRef()
  const triggerRef = useRef()

  const toggleMenu = event => {
    event.stopPropagation()
    const elementBounds = event.target.getBoundingClientRect()
    if (isOpen) setIsOpen(false)
    else {
      setTriggerBounds(elementBounds)
      setIsOpen(true)
    }
  }

  const handleClick = (event) => {
    if(isOpenRef.current){
      const isOutsideWrapper = wrapperRef.current && !wrapperRef.current.contains(event.target)
      const isOutsideTrigger = triggerRef.current && !triggerRef.current.contains(event.target)
      const isOutside = isOutsideWrapper && isOutsideTrigger
      if (isOutside) setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <Root ref={wrapperRef} {...rest}>
      <DropdownContent
        open={isOpen}
        trigger={trigger}
        triggerBounds={triggerBounds}
        toggleMenu={toggleMenu}
        triggerRef={triggerRef}
        backgroundColor={backgroundColor}
        dotColor={dotColor}
        {...rest}
      />
    </Root>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.object,
  mode: PropTypes.oneOf(['vertical', 'horizontal']),
  backgroundColor: PropTypes.string,
  dotColor: PropTypes.string,
}

Dropdown.defaultProps = {
  dotColor: '#ced0dd',
  mode: 'vertical'
}

export default Dropdown

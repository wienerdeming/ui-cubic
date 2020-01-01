import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Dot = styled('span')`
  border-radius: 50%;
  display: block;
  height: 4px;
  margin-bottom: 2px;
  transition: ${props => props.theme.cube.transition};
  width: 4px;
  &:last-child {
    margin: 0 !important;
  }
`

const Dots = styled('div')`
  pointer-events: none;
  & ${Dot} {
    background: ${props => props.color};
  }
  ${props =>
    props.mode === 'horizontal' &&
    css`
      align-items: center;
      display: flex;
      & ${Dot} {
        margin-bottom: 0;
        margin-right: 2px;
      }
    `}
`

const Container = styled(({ innerRef, isOpen, ...props }) => (
  <div ref={innerRef} {...props} />
))`
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 26px;
  width: 26px;
  transition: ${props => props.theme.cube.transition};
  ${props =>
    props.isOpen && css`
      background: ${props => props.color || '#fff'};
      & ${Dot} {
        background: ${props => props.theme.cube.primaryColor};
      }
    `}
`

const Trigger = props => {
  const { mode, backgroundColor, dotColor, defaultTrigger, ...rest } = props
  return (
    <Container color={backgroundColor} {...rest}>
      <Dots color={dotColor} mode={mode}>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Container>
  )
}

Trigger.propTypes = {
  mode: PropTypes.string,
  defaultTrigger: PropTypes.func,
  backgroundColor: PropTypes.string,
  dotColor: PropTypes.string,
}

export default Trigger

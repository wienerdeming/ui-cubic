import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const keyframes = require('styled-components').keyframes

const getSpinnerSize = props =>
  `${props.size}px`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const StyledLoader = styled('div')``

const StyledSpinner = styled('svg')`
  animation: ${rotate} 2s linear infinite;
  display:block;
  font-size: ${getSpinnerSize};
  margin: auto;
  height: 1em;
  width: 1em;
  z-index: 2;
`

const StyledPath = styled('circle')`
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke: ${props => props.color || props.theme.cube.primaryColor};
  stroke-linecap: round;
`

const Loader = props => {
  const { size, color, ...rest } = props

  return (
    <StyledLoader {...rest}>
      <StyledSpinner size={size} viewBox={'0 0 50 50'}>
        <StyledPath
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth={5}
          color={color}
        />
      </StyledSpinner>
    </StyledLoader>
  )
}

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

Loader.defaultProps = {
  size: 32
}

export default Loader

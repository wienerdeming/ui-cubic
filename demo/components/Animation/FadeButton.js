import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AnimationWrapper from 'AnimationWrapper'
import { Button } from 'Button'

const StyledFade = styled(Button)`
  opacity: ${props => props.fadeType === 'in' ? '1' : '0'};
`

const FadeButton = props => {
  if (!props.isRendered) return null
  return (
    <StyledFade {...props}>Let me fade away</StyledFade>
  )
}

FadeButton.propTypes = {
  isRendered: PropTypes.bool
}

export default AnimationWrapper(FadeButton)

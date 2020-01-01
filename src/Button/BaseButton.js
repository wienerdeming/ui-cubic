import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from '../Loader'

const BaseButton = styled.button`
  align-items: center;
  border-radius: ${props => props.theme.input.borderRadius};
  border: 1px solid ${props => props.theme.cube.primaryColor};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  height: 52px;
  padding: 0 58px;
  transition: ${props => props.theme.cube.transition};
  width: ${props => props.fullWidth && '100%'};

  &:focus {
    outline: 0;
  }
  
  &:disabled {
    opacity: 0.7;
    pointer-events: none !important;
  }
`

const StyledLoader = styled(Loader)`
  margin-left: 5px;
`

const Button = props => {
  const {
    children,
    loading,
    disabled,
    ...defaultProps
  } = props

  const isDisabled = disabled || loading
  return (
    <BaseButton disabled={isDisabled} {...defaultProps}>
      {children}
      {loading && (
        <StyledLoader size={18} color={'currentColor'} />
      )}
    </BaseButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Button

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  background: ${props => props.theme.input.backgroundColor};
  border-radius: ${props => props.theme.input.borderRadius};
  border: 1px solid transparent;
  color: inherit;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  height: 52px;
  padding: 0 20px;
  transition: all 300ms;
  width: 100%;
  
  :disabled {
    background-color: #fafbfc;
    pointer-events: none;
  }

  ::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }
  ::-ms-input-placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }

  :hover {
    background: ${props => props.theme.input.backgroundColorHover};
  }

  :focus {
    background: white;
    border-color: ${props =>
    props.error ? props.theme.cube.colorRed : props.theme.cube.primaryColor};
  }
`

const InputBase = ({ onKeyPress, onEnter, ...props }) => {
  const onPress = ev => {
    if (onEnter && ev.key === 'Enter') {
      return onEnter(ev, ev.target.value)
    }
    return onKeyPress && onKeyPress(ev, ev.target.value)
  }
  return <Input {...props} onKeyPress={onPress} />
}

InputBase.propTypes = {
  onKeyPress: PropTypes.func,
  onEnter: PropTypes.func
}

export default InputBase

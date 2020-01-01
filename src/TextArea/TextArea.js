import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import InputLabel from '../InputLabel'
import InputError from '../InputError'

const Container = styled('div')`
  position: relative;
  ${props =>
    props.error &&
    css`
      & ${InputLabel} {
        color: ${props => props.theme.cube.colorRed};
      }
    `}
`

const TextArea = styled('textarea')`
  background: ${props => props.theme.input.backgroundColor};
  border-radius: ${props => props.theme.input.borderRadius};
  border: 1px solid transparent;
  color: inherit;
  display: block;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  padding: 20px;
  min-height: 160px;
  resize: none;
  transition: ${props => props.theme.cube.transition};
  width: 100%;

  ::placeholder {
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

const TextAreaCUI = ({ children, label, error, ...rest }) => {
  const onChange = event => {
    if (typeof rest.onChange === 'function') {
      rest.onChange(event)
    }
  }
  return (
    <Container error={error}>
      <InputLabel>{label}</InputLabel>
      <TextArea {...rest} error={error} onChange={onChange} />
      <InputError>{error}</InputError>
    </Container>
  )
}

TextAreaCUI.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
}

export default TextAreaCUI

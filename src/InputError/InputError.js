import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Error = styled.div`
  background-color: #ffe2e9;
  border-radius: ${props => props.theme.cube.borderRadius?.md || props.theme.input.borderRadius};
  color: ${props => props.theme.cube.palette?.danger?.main || props.theme.cube.colorRed};
  font-size: 13px;
  margin-top: 8px;
  padding: 8px 20px;
  &:empty {
    display: none;
  }
`

const InputError = props => {
  return (
    <Error dangerouslySetInnerHTML={{ __html: props.children }} />
  )
}

InputError.propTypes = {
  children: PropTypes.string
}

export default InputError

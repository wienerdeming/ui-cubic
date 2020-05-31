import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import InputLabel from '../InputLabel'
import InputError from '../InputError'
import InputBase from './InputBase'
import InputWrapper from './InputWrapper'

const Input = forwardRef((props, ref) => {
  return (
    <InputWrapper error={props.error}>
      <InputLabel>{props.label}</InputLabel>
      <InputBase {...props} ref={ref}/>
      <InputError>{props.error}</InputError>
    </InputWrapper>
  )
})

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.any,
  error: PropTypes.string
}
Input.defaultProps = {
  type: 'text'
}

export default Input

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SwitchContainer, SwitchInput, CheckMark } from '../Switches'

const RadioCheckMark = styled(CheckMark)`
  border-radius: 50%;
  :after {
    background: ${props => props.theme.cube.primaryColor};
    border-radius: 50%;
    transform: scale(0);
    top: 5px;
    left: 5px;
    height: 6px;
    width: 6px;
    ${props =>
    props.error &&
      css`
        background: ${props => props.theme.cube.colorRed};
      `}
  }
`

const StyledInput = styled(SwitchInput)`
  :checked + ${RadioCheckMark}:after {
    transform: scale(1);
  }
`

const RadioButton = ({ label, ...props }) => {
  return (
    <SwitchContainer disabled={props.disabled}>
      {label}
      <StyledInput {...props} type={'radio'} />
      <RadioCheckMark />
    </SwitchContainer>
  )
}

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool
}

export default RadioButton

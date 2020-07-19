import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  background: ${props => props.theme.cube.palette?.primary?.main ||  props.theme.cube.primaryColor};
  color: ${props => props.theme.cube.palette?.primary?.text || '#fff'};
  &:focus {
    background: ${props => props.theme.cube.palette?.primary?.focus || props.theme.cube.primaryColor};
  }

  &:hover {
    background: ${props => props.theme.cube.palette?.primary?.hover || colorConversion(props.theme.cube.primaryColor, -16)};
  }

  &:active {
    background: ${props => props.theme.cube.palette?.primary?.active || props.theme.cube.primaryColor};
  }
`

Button.propTypes = {
  fullWidth: PropTypes.bool
}

export default Button

import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const Button = styled(BaseButton)`
  background: ${props => props.theme.cube.primaryColor};
  color: #fff;
  &:focus {
    background: ${props => props.theme.cube.primaryColor};
  }

  &:hover {
    background: ${props => colorConversion(props.theme.cube.primaryColor, -16)};
  }

  &:active {
    background: ${props => props.theme.cube.primaryColor};
  }
`

Button.propTypes = {
  fullWidth: PropTypes.bool
}

export default Button

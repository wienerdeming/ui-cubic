import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const BorderedButton = styled(BaseButton)`
  background: transparent;
  color: ${props => props.theme.cube.primaryColor};

  &:focus {
    background: ${props => props.theme.cube.primaryColor};
    color: #fff;
  }

  &:hover {
    background: ${props => colorConversion(props.theme.cube.primaryColor, -16)};
    color: #fff;
  }

  :active {
    background: ${props => props.theme.cube.primaryColor};
  }
`

BorderedButton.propTypes = {
  fullWidth: PropTypes.bool
}

export default BorderedButton

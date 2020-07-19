import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const BorderedButton = styled(BaseButton)`
  background: transparent;
  border-color: ${props => props.theme.cube.palette?.primary?.main || props.theme.cube.primaryColor};
  color: ${props => props.theme.cube.palette?.primary?.main || props.theme.cube.primaryColor};

  &:focus {
    background: ${props => props.theme.cube.palette?.primary?.hover || colorConversion(props.theme.cube.primaryColor, -16)};
    color: ${props => props.theme.cube.palette?.primary?.text || '#fff'};
  }

  &:hover {
    background: ${props => props.theme.cube.palette?.primary?.hover || colorConversion(props.theme.cube.primaryColor, -16)};
    color: ${props => props.theme.cube.palette?.primary?.text || '#fff'};
  }

  :active {
    background: ${props => props.theme.cube.palette?.primary?.active || props.theme.cube.primaryColor};
    color: ${props => props.theme.cube.palette?.primary?.text || '#fff'};
  }
`

BorderedButton.propTypes = {
  fullWidth: PropTypes.bool
}

export default BorderedButton

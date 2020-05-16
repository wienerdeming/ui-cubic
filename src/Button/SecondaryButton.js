import styled from 'styled-components'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const SecondaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.cube.palette?.secondary?.light || '#e3e7ea'};
  border: none;
  color: ${props => props.theme.cube.palette?.secondary?.dark || '#73839c'};

  :hover {
    background-color: ${props => props.theme.cube.palette?.secondary?.hover || colorConversion('#E3E7EA', -16)};
  }
  :active {
    background-color: ${props => props.theme.cube.palette?.secondary?.active || colorConversion('#E3E7EA', -16)};
  }
`

export default SecondaryButton

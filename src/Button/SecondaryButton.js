import styled from 'styled-components'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const SecondaryButton = styled(BaseButton)`
  background-color: #e3e7ea;
  border: none;
  color: #73839c;

  :hover {
    background-color: ${colorConversion('#E3E7EA', -16)};
  }
`

export default SecondaryButton

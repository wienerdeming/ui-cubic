import styled from 'styled-components'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const DangerButton = styled(BaseButton)`
  background-color: #fff;
  border: 1px solid #ff2e63;
  color: #ff2e63;

  :hover {
    background-color: ${colorConversion('#FF2E63', 199)};
  }
  :active {
    background-color: ${colorConversion('#FF2E63', 202)};
  }
`

export default DangerButton

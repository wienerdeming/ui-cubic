import styled from 'styled-components'
import { colorConversion } from '../utils'
import BaseButton from './BaseButton'

const DangerButton = styled(BaseButton)`
  background-color: #fff;
  border: 1px solid ${props => props.theme.cube.palette?.danger?.main || '#ff2e63'};
  color: ${props => props.theme.cube.palette?.danger?.main || '#ff2e63'};

  :focus {
    background-color: ${props => props.theme.cube.palette?.danger?.focus || colorConversion('#FF2E63', 199)};
    color: ${props => props.theme.cube.palette?.danger?.text || '#ff2e63'};
  }

  :hover {
    background-color: ${props => props.theme.cube.palette?.danger?.hover || colorConversion('#FF2E63', 199)};
    color: ${props => props.theme.cube.palette?.danger?.text || '#ff2e63'};
  }
  :active {
    background-color: ${props => props.theme.cube.palette?.danger?.active || colorConversion('#FF2E63', 190)};
    color: ${props => props.theme.cube.palette?.danger?.text || '#ff2e63'};
  }
`

export default DangerButton

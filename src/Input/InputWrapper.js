import styled, { css } from 'styled-components'
import InputLabel from '../InputLabel'

export default styled.div`
  position: relative;
  ${props =>
    props.error &&
    css`
      & ${InputLabel} {
        color: ${props => props.theme.cube.colorRed + '!important'};
      }
    `}
`

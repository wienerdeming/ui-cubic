import styled, { css } from 'styled-components'
import CheckMark from './CheckMark'

export default styled.label`
  cursor: pointer;
  font-size: 14px;
  display: block;
  line-height: 18px;
  margin-bottom: 12px;
  padding-left: 26px;
  position: relative;
  user-select: none;
  width: fit-content;
  :last-child {
    margin-bottom: 0;
  }
  :hover ${CheckMark} {
    border-color: ${props => props.theme.cube.primaryColor};
  }
  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`

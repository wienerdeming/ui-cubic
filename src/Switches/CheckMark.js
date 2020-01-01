import styled, { css } from 'styled-components'

export default styled.span`
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.075);
  border: 1px solid #b4bfc9;
  position: absolute;
  transition: all 300ms;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  :after {
    content: '';
    opacity: 0;
    position: absolute;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }

  ${props =>
    props.error &&
    css`
      background: #ffecf1 !important;
      border-color: ${props => props.theme.cube.colorRed} !important;
    `}
`

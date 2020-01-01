import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Row = styled.div`
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  display: flex;
  ${props => {
    const gutter = props.gutter
    const spaceValue = gutter / 2
    return (
      gutter &&
      css`
        & > div {
          padding-left: ${spaceValue}px;
          padding-right: ${spaceValue}px;
          &:first-child {
            padding-left: 0;
          }
          &:last-child {
            padding-right: 0;
          }
        }
      `
    )
  }}
`

Row.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  gutter: PropTypes.number
}

export default Row

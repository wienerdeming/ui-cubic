import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const MAX_COL_SIZE = 24

const Col = styled.div`
  flex-grow: 1;
  ${props =>
    props.span &&
    css`
      flex-basis: ${(props.span / MAX_COL_SIZE) * 100}%;
    `}
`
Col.propTypes = {
  span: PropTypes.number
}
export default Col

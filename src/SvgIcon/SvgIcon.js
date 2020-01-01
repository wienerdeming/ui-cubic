import PropTypes from 'prop-types'
import styled from 'styled-components'

const SVG = styled.svg`
  transition: fill 300ms;
  min-width: 1em;
`

SVG.propTypes = {
  children: PropTypes.node.isRequired
}

SVG.defaultProps = {
  fontSize: '24px',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  height: '1em',
  width: '1em',
  xmlns: 'http://www.w3.org/2000/svg'
}

export default SVG

import styled from 'styled-components'
import PropTypes from 'prop-types'

const Box = styled.div`
  background: #ffffff;
  border-radius: ${props => props.theme.input.borderRadius};
  box-shadow: 0 4px 15px rgba(211, 216, 224, 0.24);
  padding: ${props => props.padding};
`

Box.propTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Box.defaultProps = {
  padding: '0 25px'
}

export default Box

import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputLabel = styled.div`
  color: ${props => props.theme.input.labelColor};
  display: ${props => (props.children ? 'block' : 'none')};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  margin-bottom: 8px;
  text-transform: uppercase;
`

InputLabel.propTypes = {
  children: PropTypes.string
}

export default InputLabel

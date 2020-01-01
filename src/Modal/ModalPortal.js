import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ModalPortal extends React.Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
    document.body.appendChild(this.el)
  }

  componentWillUnmount () {
    document.body.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

ModalPortal.propTypes = {
  children: PropTypes.node
}

export default ModalPortal

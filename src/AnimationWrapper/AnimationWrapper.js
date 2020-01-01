import React from 'react'
import PropTypes from 'prop-types'

export default Component => {
  const AnimationWrapper = class AnimationWrapper extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        fadeType: null,
        isRendered: props.open
      }
      this.timeout = null
    }

    onOpen (prevProps) {
      if (this.props.open && this.props.open !== prevProps.open) {
        this.setState({ isRendered: true })
        setTimeout(() => this.setState({ fadeType: 'in' }), 0)
        if (this.timeout) clearTimeout(this.timeout)
      }
    }

    onClose (prevProps) {
      if (!this.props.open && this.props.open !== prevProps.open) {
        this.setState({ fadeType: 'out' })
        this.timeout = setTimeout(() => {
          this.setState({ isRendered: false })
        }, this.props.fadeDuration)
      }
    }

    componentDidMount () {
      if (this.props.open) {
        this.timeout = setTimeout(() => this.setState({ fadeType: 'in' }), 0)
      }
    }

    componentDidUpdate (prevProps) {
      this.onOpen(prevProps)
      this.onClose(prevProps)
    }

    render () {
      const { fadeType, isRendered } = this.state
      return (
        <Component
          {...this.props}
          fadeType={fadeType}
          isRendered={isRendered}
        />
      )
    }
  }

  AnimationWrapper.propTypes = {
    open: PropTypes.bool.isRequired,
    fadeDuration: PropTypes.number
  }

  AnimationWrapper.defaultProps = {
    fadeDuration: 300
  }

  return AnimationWrapper
}

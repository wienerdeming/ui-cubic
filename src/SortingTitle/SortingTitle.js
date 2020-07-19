import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ArrowTop from './ArrowTop'
import ArrowBottom from './ArrowBottom'

const SortingTitle = styled.div`
  color: ${props => props.theme.cube.palette?.text?.light};
  font-size: 12px;
  font-weight: 500;
  display: flex;
  text-transform: uppercase;
  width: fit-content;
  ${props =>
    props.sorting &&
    css`
      cursor: pointer;
      padding-right: 15px;
      position: relative;
    `}
`

const ArrowComponent = arrow => styled(arrow)`
  color: ${props => (props.active ? props.theme.cube.primaryColor : '#AFB4BC')};
  display: block;
  min-width: unset;
  height: 5px;
  width: 8px;
  :first-child {
    margin-bottom: 2px;
  }
`

const Arrows = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 1px);
  transform: translateY(-50%);
`

const NONE = null
const DESC = 'desc'
const ASC = 'asc'

const Component = props => {
  const { title, sorting, name, initialValue, onClick } = props
  const StyledArrowTop = ArrowComponent(ArrowTop)
  const StyledArrowBottom = ArrowComponent(ArrowBottom)
  const [mode, setMode] = React.useState(initialValue)
  const isNone = mode === NONE
  const isAsc = mode === ASC
  const isDesc = mode === DESC
  const onSorted = () => {
    if (!sorting || typeof onClick !== 'function') return null

    if (isNone) {
      setMode(ASC)
      onClick({ key: name, state: ASC })
    } else if (isAsc) {
      setMode(DESC)
      onClick({ key: name, state: DESC })
    } else {
      setMode(NONE)
      onClick({ key: name, state: NONE })
    }
    return null
  }
  return (
    <SortingTitle {...props} onClick={onSorted}>
      {title}
      {sorting && (
        <Arrows>
          <StyledArrowTop active={isAsc} />
          <StyledArrowBottom active={isDesc} />
        </Arrows>
      )}
    </SortingTitle>
  )
}

Component.propTypes = {
  title: PropTypes.any,
  sorting: PropTypes.bool,
  name: PropTypes.string,
  initialValue: PropTypes.string,
  onClick: PropTypes.func
}

Component.defaultProps = {
  sorting: false,
  initialValue: NONE
}

export default Component

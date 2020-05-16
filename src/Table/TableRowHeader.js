import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from 'Grid'
import { isEmpty } from '../utils'
import Checkbox from '../Checkbox'

const CheckboxRow = styled(Row)`
  align-items: center;
  border-top: 1px solid #eaebee;
  padding: 10px;
  background-color: #fbfbfd;
  min-height: 50px;
`

const FullWidthRow = styled(Row)`
  width: 100%;
`
const EMPTY_ARR = []
const TableRowHeader = props => {
  const {
    selection,
    list,
    children,
    onCheck,
    checkedList,
    gutter,
    onSort,
    initialSorting,
    ...rest
  } = props

  const onSelectHandler = checked => {
    if (checked) {
      onCheck(list.map(item => item))
    } else {
      onCheck(EMPTY_ARR)
    }
  }
  const cloneChild = () => {
    return React.Children.map(children, (child, key) =>
      React.cloneElement(child, { key, onSort, initialSorting })
    )
  }

  const checked = !isEmpty(list) && list.length === checkedList.length
  const indeterminate = !isEmpty(checkedList) && list.length !== checkedList.length
  if (selection) {
    return (
      <CheckboxRow gutter={gutter} {...rest}>
        <Checkbox
          checked={checked}
          indeterminate={indeterminate}
          onChange={onSelectHandler}
        />
        <FullWidthRow gutter={gutter}>{cloneChild(onSort)}</FullWidthRow>
      </CheckboxRow>
    )
  }

  return (
    <CheckboxRow gutter={gutter} {...rest}>
      {cloneChild()}
    </CheckboxRow>
  )
}

TableRowHeader.propTypes = {
  list: PropTypes.array,
  checkedList: PropTypes.array,
  children: PropTypes.node,
  gutter: PropTypes.number,
  onSort: PropTypes.func,
  onCheck: PropTypes.func,
  selection: PropTypes.bool,
  initialSorting: PropTypes.object
}
TableRowHeader.defaultProps = {
  list: EMPTY_ARR
}

export default TableRowHeader

/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import SortingContext from 'contexts/SortingContext'
import { isEmpty } from '../utils'

const defaultArr = []
const Table = props => {
  const {
    children,
    gutter,
    selection,
    list,
    initialSelected,
    initialSorting,
    onSort,
    onSelect
  } = props

  const [checkedList, onCheck] = useState(initialSelected)
  const isFirstRun = useRef(true)

  const checklistStr = checkedList.join('-')
  const initSelectedStr = initialSelected.join('-')

  useEffect(() => {
    if (isFirstRun && isFirstRun.current) {
      if (selection && typeof onSelect !== 'function') {
        console.warn(
          'Warning: This warning is appearing because you have provided selection without onSelect function'
        )
      }

      if (selection && (!list || !Array.isArray(list))) {
        console.warn(
          'Warning: This warning is appearing because you have not provided list array'
        )
      }

      isFirstRun.current = false
      return
    }

    typeof onSelect === 'function' && onSelect(checkedList)
  }, [checklistStr])

  useEffect(() => {
    if (!isEmpty(initialSelected) && initSelectedStr !== checklistStr) {
      onCheck(initialSelected)
    }
  }, [initSelectedStr])

  return (
    <SortingContext.Provider
      value={{
        onSort,
        list,
        selection,
        gutter,
        checkedList,
        initialSorting,
        onCheck
      }}
    >
      {children}
    </SortingContext.Provider>
  )
}

Table.propTypes = {
  selection: PropTypes.bool,
  children: PropTypes.node,
  list: PropTypes.array,
  initialSelected: PropTypes.array,
  initialSorting: PropTypes.object,
  onSort: PropTypes.func,
  onSelect: PropTypes.func,
  gutter: PropTypes.number
}

Table.defaultProps = {
  initialSelected: defaultArr
}
export default Table

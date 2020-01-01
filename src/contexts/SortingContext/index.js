import React from 'react'

export default React.createContext({
  selection: false,
  gutter: 0,
  onSort: () => null,
  list: [],
  checkedList: [],
  initialSorting: {},
  onCheck: () => null
})

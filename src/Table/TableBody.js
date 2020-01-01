import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TableBodyWrapper = styled.div`
  background-color: #fff;
`

const TableBody = ({ children }) => {
  const cloneRows = (child, key) =>
    React.cloneElement(child, { key, isBody: true })

  return (
    <TableBodyWrapper data-cy={'table-body'}>
      {React.Children.map(children, cloneRows)}
    </TableBodyWrapper>
  )
}

TableBody.propTypes = {
  children: PropTypes.node
}

export default TableBody

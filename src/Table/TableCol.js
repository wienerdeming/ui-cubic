/* eslint-disable */
import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import SortingTitle from 'SortingTitle'
import PropTypes from 'prop-types'
import { Col as ColCUI } from 'Grid'
import fastCompare from '../fastCompare'

const Col = styled(ColCUI)`
  //padding: 17px 0;
  word-break: break-word;
`

const TableCol = props => {
  const { sortKey, children, isBody, onSort, initialSorting, ...rest } = props

  useEffect(() => {
    if (sortKey && typeof onSort !== 'function') {
      console.warn('Please pass onSort function in order to sorting to work')
    }
  }, [onSort, sortKey])

  if (isBody) {
    return <Col {...rest}>{children}</Col>
  }
  return (
    <Col {...rest}>
      <SortingTitle
        onClick={onSort}
        name={sortKey}
        initialValue={initialSorting[sortKey]}
        sorting={Boolean(sortKey)}
        title={children}
      />
    </Col>
  )
}

TableCol.propTypes = {
  span: PropTypes.number,
  sortKey: PropTypes.string,
  children: PropTypes.any,
  isBody: PropTypes.bool,
  onSort: PropTypes.func,
  initialSorting: PropTypes.object
}

TableCol.defaultProps = {
  isBody: false,
  initialSorting: {}
}
export default memo(TableCol, fastCompare)

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import SortingContext from 'contexts/SortingContext'
import { Row } from 'Grid'
import Checkbox from 'Checkbox'
import { isEmpty } from '../utils'
import TableRowHeader from './TableRowHeader'

const StyledRow = styled(Row)`
  align-items: ${props => props.align};
  background-color: #fff;
  border-top: 1px solid #eaebee;
  padding: 10px;
  position: relative;
  min-height: 55px;
  z-index: 1;
  &:before {
    border-radius: 8px;
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    bottom: 6px;
    transition: background-color 200ms;
    z-index: -1;
  }
  ${props =>
    props.isClickable &&
  css`
      cursor: pointer;
      &:hover:before {
        background-color: ${props => props.theme.cube.hoverBackgroundColor};
      }
    `}
`

const CheckboxRow = styled(StyledRow)`
  align-items: center;
  ${props =>
    props.checked &&
  css`
      &:before {
        background-color: ${props.theme.cube.selectBackgroundColor} !important;
      }
    `}
`

const FullWidthRow = styled(Row)`
  align-items: center;
  width: calc(100% - 18px);
`

const TableRow = props => {
  const { children, isBody, selectId, align, onClick, ...rest } = props

  const contextProps = useContext(SortingContext)
  const { gutter, checkedList, onCheck, onSort, selection } = contextProps

  const isClickable = typeof onClick === 'function'

  const onSelectHandler = (checked) => {
    if (checked) {
      onCheck([...checkedList, selectId])
    } else {
      onCheck(checkedList.filter(item => item !== selectId))
    }
  }

  const cloneChild = () => {
    return React.Children.map(children, (child, key) => {
      return React.cloneElement(child, { key, isBody, onSort })
    })
  }

  const checked = !isEmpty(checkedList) && checkedList.includes(selectId)
  const selectableBody = selection && isBody

  if (!isBody) {
    return (
      <TableRowHeader {...contextProps} {...rest}>
        {children}
      </TableRowHeader>
    )
  }

  if (selectableBody) {
    return (
      <CheckboxRow
        data-cy="table-row"
        checked={checked}
        gutter={gutter}
        isClickable={isClickable}
        {...rest}
      >
        <Checkbox
          checked={checked}
          onChange={checked =>
            onSelectHandler(checked)
          }
        />
        <FullWidthRow gutter={gutter} onClick={onClick}>
          {cloneChild()}
        </FullWidthRow>
      </CheckboxRow>
    )
  }

  return (
    <StyledRow
      data-cy={'table-row'}
      align={align}
      gutter={gutter}
      onClick={onClick}
      isClickable={isClickable}
      {...rest}
    >
      {cloneChild()}
    </StyledRow>
  )
}

TableRow.propTypes = {
  children: PropTypes.any,
  isBody: PropTypes.bool,
  selectId: PropTypes.number,
  align: PropTypes.string,
  onClick: PropTypes.func
}

export default TableRow

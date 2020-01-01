import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { components } from 'react-select'

const CreateButton = styled('div')`
  background-color: #fafbfc;
  border: 1px dashed #dee0e5;
  border-radius: ${props => props.theme.input.borderRadius};
  color: ${props => props.theme.cube.primaryColor};
  cursor: pointer;
  font-size: 15px;
  margin: 12px;
  padding: 10px 16px;
  text-align: center;
  transition: ${props => props.theme.cube.transition};
  &:hover {
    background-color: ${props => props.theme.input.backgroundColor};
  }
`

const MenuList = props => {
  const { isCreatable, onCreate, selectProps, selectRef } = props
  const onCreateNew = () => {
    selectProps.onMenuClose()
    if (selectRef.current) {
      selectRef.current.select.inputRef.blur()
    }
    if (onCreate) onCreate()
  }

  return (
    <components.MenuList {...props}>
      {props.children}

      {isCreatable && (
        <CreateButton onClick={onCreateNew} tabIndex={'-1'}>
          + Создать новый
        </CreateButton>
      )}
    </components.MenuList>
  )
}

MenuList.propTypes = {
  children: PropTypes.node,
  isCreatable: PropTypes.bool,
  onCreate: PropTypes.func,
  selectProps: PropTypes.object,
  selectRef: PropTypes.object,
}

export default MenuList

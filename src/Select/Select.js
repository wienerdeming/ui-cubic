import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import ReactSelect from 'react-select'
import InputLabel from '../InputLabel'
import InputError from '../InputError'
import selectStyles from './selectStyles'
import MenuList from './MenuList'

const options = [
  // { value: 'cherry', label: 'Cherry' },
  // { value: 'banana', label: 'Banana' },
  // { value: 'apple', label: 'Apple' }
]

const SelectWrapper = styled('div')`
  ${({ error }) => error && css`
    & ${InputLabel} {
      color: ${props => props.theme.cube.colorRed};
    }
  `}
`

const noOptionsMessage = ({ inputValue }) => {
  if (inputValue) return `Не найдено "${inputValue}"`
  return 'Не найдено'
}

const loadingMessage = ({ inputValue }) => {
  return 'Загрузка'
}

const Select = props => {
  const {
    theme,
    label,
    error,
    onChange,
    type,
    onMenuOpen,
    onMenuClose,
    height,
    isCreatable,
    onCreate,
    ...rest
  } = props

  const selectRef = React.useRef()
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const handleMenuOpen = () => {
    setMenuIsOpen(true)
    if (typeof onMenuOpen === 'function') {
      onMenuOpen()
    }
  }

  const handleMenuClose = (ev) => {
    setMenuIsOpen(false)
    if (typeof onMenuClose === 'function') {
      onMenuClose()
    }
  }

  return (
    <SelectWrapper error={error}>
      <InputLabel>{label}</InputLabel>
      <ReactSelect
        ref={selectRef}
        options={options}
        classNamePrefix={'select'}
        styles={selectStyles(theme, {
          error,
          height,
          menuIsOpen
        })}
        closeMenuOnSelect={!rest.isMulti}
        menuIsOpen={menuIsOpen}
        openMenuOnClick={type === 'select'}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        noOptionsMessage={noOptionsMessage}
        loadingMessage={loadingMessage}
        onChange={(option, action) => {
          if (typeof onChange === 'function') {
            onChange(option)
          }
        }}
        menuPortalTarget={document.body}
        components={{
          MenuList: menuListProps => (
            <MenuList
              isCreatable={isCreatable}
              onCreate={onCreate}
              selectRef={selectRef}
              {...menuListProps}
            />
          )
        }}
        {...rest}
      />
      <InputError>{error}</InputError>
    </SelectWrapper>
  )
}

Select.propTypes = {
  theme: PropTypes.object,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'select',
    'autocomplete'
  ]),
  isMulti: PropTypes.bool,
  isCreatable: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onMenuOpen: PropTypes.func,
  onMenuClose: PropTypes.func,
  onCreate: PropTypes.func,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Select.defaultProps = {
  type: 'select',
  placeholder: 'Выберите из списка',
  isCreatable: false,
  isMulti: false
}

export default withTheme(Select)

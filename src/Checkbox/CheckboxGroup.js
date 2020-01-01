import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import InputLabel from '../InputLabel'
import { SwitchContainer } from '../Switches'

const Group = styled('div')``

const Checkboxes = styled('div')`
  ${props =>
    props.mode === 'inline' &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin-bottom: -12px;
      & ${SwitchContainer} {
        margin-right: 25px;
        &:last-child {
          margin-bottom: 12px;
        }
      }
    `}
`

const CheckboxGroup = props => {
  const { value, children, label, onChange, mode, ...rest } = props
  const [checkedValues, setCheckedValues] = useState([])

  useEffect(() => {
    setCheckedValues(value)
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }, [value, onChange])

  const onChangeItem = (value, isChecked) => {
    const formedValues = isChecked
      ? [...checkedValues, value]
      : checkedValues.filter(item => item !== value)
    setCheckedValues(formedValues)
    if (typeof onChange === 'function') {
      onChange(formedValues)
    }
  }

  return (
    <Group {...rest}>
      <InputLabel>{label}</InputLabel>
      <Checkboxes mode={mode}>
        {React.Children.map(children, (child, key) => {
          const checkboxProps = child.props
          const childValue = checkboxProps.value
          return React.cloneElement(child, {
            key,
            ...checkboxProps,
            checked: checkedValues.includes(childValue),
            onChange: isChecked => onChangeItem(childValue, isChecked)
          })
        })}
      </Checkboxes>
    </Group>
  )
}

CheckboxGroup.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  mode: PropTypes.oneOf(['inline', 'block'])
}

CheckboxGroup.defaultProps = {
  mode: 'inline',
  value: []
}

export default CheckboxGroup

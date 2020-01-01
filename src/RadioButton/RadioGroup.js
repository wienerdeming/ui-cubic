import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`

const RadioGroup = ({ children, onChange, ...props }) => {
  const onClick = ev => onChange && onChange(ev.target.value, event)
  return (
    <Fieldset onChange={onClick}>
      {React.Children.map(children, (child, key) => {
        return <child.type key={key} {...child.props} name={props.name} />
      })}
    </Fieldset>
  )
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default RadioGroup

import React from 'react'
import { CheckboxGroup, Checkbox, Button } from '../../../dist/index.es'
import { Title, Description } from '../Utils'
import styled from 'styled-components'

const GroupWrapper = styled.div`
  width: 300px;
  margin-top: 60px;
  margin-bottom: 20px;
`

const Checkboxes = props => {
  const [value, setValue] = React.useState([])

  const selectFirstTwo = () => {
      const items = value.length ? [] : ['gr1', 'gr2']
      setValue(items)
  }


  return (
    <div>
      <Title>Checkboxes  </Title>
      <Description>Checkboxes allow the user to select one or more items from a set.</Description>
      <Checkbox label={'Checkbox 2'} />
      <Checkbox label={'Checkbox 3'} />
      <Checkbox label={'Checkbox 4'} />

      <GroupWrapper>
        <CheckboxGroup
          label="Groups"
          mode="inline"
          value={value}
          onChange={values => values}>
          <Checkbox value={'gr1'} label={'Group 1'} />
          <Checkbox value={'gr2'} label={'Group 2'} />
          <Checkbox value={'gr3'} label={'Group 3'} />
        </CheckboxGroup>
      </GroupWrapper>
      <Button onClick={selectFirstTwo}>Select first two</Button>
    </div>
  )
}
export default Checkboxes

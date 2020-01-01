import React from 'react'
import Checkbox, { CheckboxGroup } from 'Checkbox'
import { Title, Description } from '../Utils'

const Checkboxes = props => {
  const [value, setValue] = React.useState([])

  return (
    <div>
      <Title>Checkboxes </Title>
      <Description>Checkboxes allow the user to select one or more items from a set.</Description>
      <Checkbox label={'Checkbox 2'} />
      <Checkbox label={'Checkbox 3'} />
      <Checkbox label={'Checkbox 4'} />

      <br /><br /><br /><br />
      <div style={{ width: 300 }}>
        <button onClick={() => setValue(['gr1', 'gr2'])}>asdasd</button>
        <CheckboxGroup
          label={'Группы'}
          mode={'inline'}
          value={value}
          onChange={values => values}>
          <Checkbox value={'gr1'} label={'Group 1'} />
          <Checkbox value={'gr2'} label={'Group 2'} />
          <Checkbox value={'gr3'} label={'Group 3'} />
        </CheckboxGroup>
      </div>
    </div>
  )
}
export default Checkboxes

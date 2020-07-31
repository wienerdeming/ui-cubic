import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {Checkbox, CheckboxGroup, Button} from '../src'

const Description = styled.div`
  margin: 15px 0;
`


const Wrapper = styled.div`
  padding: 30px 20px;
  > div {
  margin-right: 20px;
  margin-bottom: 10px;
  }
`

const GroupWrapper = styled.div`
  width: 300px;
  margin-top: 60px;
  margin-bottom: 20px;
`



storiesOf('Checkboxes', module)
  .add('default', () => {

    const [value, setValue] = React.useState([])

    const selectFirstTwo = () => {
      const items = value.length ? [] : ['gr1', 'gr2']
      setValue(items)
    }

    return (
      <Wrapper>

          <h1>Checkboxes  </h1>
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

      </Wrapper>
    )
  })

/*
export default {
  title: 'Buttons',
  component: Button,
};


export const Buttons = () => (

);
*/

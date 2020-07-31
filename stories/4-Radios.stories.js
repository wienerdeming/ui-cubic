import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { RadioButton, RadioGroup} from '../src'

const Wrapper = styled.div`
  padding: 30px 20px;
`


storiesOf('RadioButtons', module)
  .add('default', () => (

      <Wrapper>
        <h1>Radio Buttons</h1>
        <RadioGroup name="vegetables" value="1" onChange={console.warn}>
          <RadioButton label={'Radio button 1'} value={'1'} />
          <RadioButton label={'Radio button 2'} value={'2'} />
          <RadioButton label={'Radio button 3'} value={'3'} />
          <RadioButton label={'Radio button 4'} value={'4'} />
        </RadioGroup>
      </Wrapper>

    ))


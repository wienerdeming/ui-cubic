import React from 'react'
import { RadioButton, RadioGroup } from 'RadioButton'
import { Title, Description } from '../Utils'

const RadioButtons = props => {
  return (
    <div>
      <Title>Radio button</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, recusandae.</Description>
      <RadioGroup name={'vegetables'} value={'1'} onChange={val => val}>
        <RadioButton label={'Radio button 1'} value={'1'} />
        <RadioButton label={'Radio button 2'} value={'2'} />
        <RadioButton label={'Radio button 3'} value={'3'} />
        <RadioButton label={'Radio button 4'} value={'4'} />
      </RadioGroup>
    </div>
  )
}

export default RadioButtons

import React from 'react'
import { Button, BorderedButton, SecondaryButton, DangerButton } from 'Button'
import SortingTitle from 'SortingTitle'
import {Button as ButtonES} from '../../../dist/index.es'
import { Title, Description } from '../Utils'
const buttonStyle = {
  marginRight: '20px'
}

const Buttons = props => {
  return (
    <div>
      <Title>Buttons</Title>
      <Description>Buttons allow users to take actions, and make choices, with a single tap.</Description>

      <div>

        <ButtonES style={buttonStyle}>Main button</ButtonES>
        <Button style={buttonStyle}>Main button</Button>
        <BorderedButton style={buttonStyle}>Bordered button</BorderedButton>
        <SecondaryButton style={buttonStyle}>Secondary button</SecondaryButton>
        <DangerButton style={buttonStyle}>Danger button</DangerButton>
        <Button loading={true} style={buttonStyle}>Loading button</Button>
      </div>
    </div>
  )
}
export default Buttons

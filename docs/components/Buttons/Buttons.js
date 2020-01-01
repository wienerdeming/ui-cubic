import React from 'react'
import { Button, BorderedButton, SecondaryButton, DangerButton } from 'Button'
import SortingTitle from 'SortingTitle'
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
        <Button style={buttonStyle}>Main button</Button>
        <BorderedButton style={buttonStyle}>Bordered button</BorderedButton>
        <SecondaryButton style={buttonStyle}>Secondary button</SecondaryButton>
        <DangerButton style={buttonStyle}>Danger button</DangerButton>
        <Button loading={true} style={buttonStyle}>Loading button</Button>
      </div>
      <br /><br /><br />
      <Title>Table Titles</Title>
      <Description>Sortable & simple titles</Description>
      <div>
        <SortingTitle title={'ФИО'} sorting={true} />
        <SortingTitle title={'Наименование'} sorting={true} />
        <SortingTitle title={'Статус'} />
        <SortingTitle title={'Сумма'} />
      </div>
    </div>)
}
export default Buttons

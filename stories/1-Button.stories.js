import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {BorderedButton, Button, DangerButton, SecondaryButton} from '../src'
import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';

const buttonStyle = {
  marginRight: '20px',
  marginBottom: '10px',
}
const Wrapper = styled.div`
  button {
  margin-right: 20px;
  margin-bottom: 10px;
  }
`

/*
* .add('default', () => (
    <>
      <Button onClick={action('clicked')} style={buttonStyle}>Main button</Button>
      <BorderedButton style={buttonStyle}>Bordered button</BorderedButton>
      <SecondaryButton style={buttonStyle}>Secondary button</SecondaryButton>
      <DangerButton style={buttonStyle}>Danger button</DangerButton>
      <Button loading={true} style={buttonStyle}>Loading button</Button>
    </>
  ))*/


storiesOf('Buttons', module)
  .add('default', () => (
    <Wrapper>
      <Button onClick={action('clicked')} >Main button</Button>
      <BorderedButton >Bordered button</BorderedButton>
      <SecondaryButton >Secondary button</SecondaryButton>
      <DangerButton >Danger button</DangerButton>
      <Button loading={true} >Loading button</Button>
    </Wrapper>
  ))

/*
export default {
  title: 'Buttons',
  component: Button,
};


export const Buttons = () => (

);
*/

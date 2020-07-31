import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {BorderedButton, Button, DangerButton, SecondaryButton} from '../dist'


const Wrapper = styled.div`
  padding: 30px 20px;
  button {
  margin-right: 20px;
  margin-bottom: 10px;
  }
`


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

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {Toaster, TOASTER_TYPES as TYPES} from '../dist/index.es'
import Proptypes from 'prop-types'

const Wrapper = styled.div`
  padding: 30px 20px;
`

const Component = () => {
  return (
    <Wrapper>
      <Toaster title="Success"/>
      <br/>
      <Toaster type={TYPES.ERROR} />
      <br/>
      <Toaster type={TYPES.WARNING}/>
    </Wrapper>
  )
}
Component.propTypes = {
  color: Proptypes.string
}
Component.defaultProps = {
  color: 'red'
}
storiesOf('Toaster', module)
  .add('default', () => (
    <Wrapper>
      <Toaster title="Success" message="Done"/>
      <br/>
      <Toaster type={TYPES.ERROR} />
      <br/>
      <Toaster type={TYPES.WARNING}/>
    </Wrapper>
  ))


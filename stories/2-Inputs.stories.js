import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {IconInput, Input, TextArea} from '../dist/index.es'
import UserIcon from "./User";
import EditIcon from "./User";


const CustomStyleInput = styled(IconInput)`
  align-self: center;
  background-color: #fbfbfc;
  border: 1px solid #e4e5eb;
  border-radius: 6px;
  padding-left: 44px;
  height: 36px;
  ::placeholder {
    color: #b2b7bf;
    font-size: 14px;
  }
`
const Wrapper = styled.div`
  padding: 30px 20px;
  > div {
  margin-right: 20px;
  margin-bottom: 10px;
  }
`


storiesOf('Inputs', module)
  .add('default', () => {

    return (
      <Wrapper>

          <Input
            label={'Default input'}
            placeholder={'Input some text here'}
          />


          <Input
            label={'Disabled input'}
            value={'Disabled'}
            placeholder={'Input some text here'}
            disabled={true}
          />


          <IconInput
            label={'Input with icon'}
            placeholder={'Input with  icon'}
            icon={UserIcon}
          />


          <Input
            label={'Error input'}
            placeholder={'Input some text here'}
            error={'This field is required.'}
          />


          <CustomStyleInput
            icon={EditIcon}
            label={'Custom styled with styled-components'}
            placeholder={'Input some text here'}
          />


          <h1>Text area</h1>
          <TextArea
            label={'Comments'}
            placeholder={'Add your comment'}
          />
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

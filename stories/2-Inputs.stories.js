import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {IconInput, Input} from '../src'
import UserIcon from "../demo/icons/User";
import EditIcon from "../demo/icons/Edit";
import {Title} from "../demo/components/Utils";
import TextArea from "../src/TextArea/TextArea";


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


          <Title>Text area</Title>
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

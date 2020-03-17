import React from 'react'
import styled from 'styled-components'
import { Input, IconInput } from 'Input'
import TextArea from '../../../src/TextArea'
import UserIcon from '../../icons/User'
import EditIcon from '../../icons/Edit'
import { Title } from '../Utils'

const SelectWrapper = styled.div`
  margin-top: 50px;
  & > div {
    margin-bottom: 20px;
  }
`

const InputWrapper = styled.div`
  margin-bottom: 20px;
`

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

export default props => {
  return (
    <div>
      <Title>Inputs</Title>
      <InputWrapper>
        <Input
          label={'Default input'}
          placeholder={'Input some text here'}

        />
      </InputWrapper>

      <InputWrapper>
        <Input
          label={'Disabled input'}
          value={'dasdas'}
          placeholder={'Input some text here'}
          disabled={true}
        />
      </InputWrapper>

      <InputWrapper>
        <IconInput
          label={'Input with icon'}
          placeholder={'Input with icon'}
          icon={UserIcon}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          label={'Error input'}
          placeholder={'Input some text here'}
          error={'Заполните это поле!'}
        />
      </InputWrapper>

      <InputWrapper>
        <CustomStyleInput
          icon={EditIcon}
          label={'Custom style input'}
          placeholder={'Input some text here'}
        />
      </InputWrapper>

      <SelectWrapper>
        <Title>Text area</Title>
        <TextArea
          label={'Comments'}
          placeholder={'Bla bla'}
        />
      </SelectWrapper>
    </div>
  )
}

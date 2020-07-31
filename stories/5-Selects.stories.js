import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {Modal, Select, SelectCreatable} from '../src'

const Wrapper = styled.div`
  padding: 30px 20px;
  & > div {
    margin-bottom: 20px;
  }

`

const options = [
  { value: 'sun', label: 'Sun' },
  { value: 'moon', label: 'Moon' },
  { value: 'star', label: 'Star' },
  { value: 'planet', label: 'Planet' },
  { value: 'galaxy', label: 'Galaxy' }
]


storiesOf('Selects', module)
  .add('default', () => {
    const [openModal, setOpenModal] = React.useState(false)

    const [creatableValue, setCreatableValue] = useState(null)

    const [creatableOptions, setCreatable] = useState(options)


    const onCreateOption = value => {
      const newValue = {value, label: value}
      setCreatable([...creatableOptions, newValue])
      setCreatableValue(newValue)
    }


    const onOpenModal = () => setOpenModal(true)
    const onCloseModal = () => setOpenModal(false)

    return (

      <Wrapper>
        <Select
          label={'Disabled Simple Select'}
          isDisabled={true}
          options={options}
          defaultValue={{ value: 'moon', label: 'Moon' }}
        />

        <SelectCreatable
          label={'Creatable Select Default'}
          onCreateOption={onCreateOption}
          options={creatableOptions}
          onChange={setCreatableValue}
          value={creatableValue}
        />

        <Select
          label={'Creatable Select Custom'}
          options={options}
          isCreatable={true}
          onCreate={onOpenModal}
        />


        <Select
          label={'Default Select ERROR'}
          type={'select'}
          error={'This field is required.'}
          options={options}
        />
        <Select
          label={'Custom height select'}
          height={'42px'}
          options={options}
        />
        <Modal title={'Modal'} open={openModal} onClose={onCloseModal}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, rerum.
        </Modal>
      </Wrapper>

    )
  })


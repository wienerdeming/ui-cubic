import React from 'react'
import Select from 'Select'
import Modal from 'Modal'
import styled from 'styled-components'
import { Title } from '../Utils'

const SelectWrapper = styled('div')`
  margin-top: 50px;
  & > div {
    margin-bottom: 20px;
  }
`

const Selects = props => {
  const [openModal, setOpenModal] = React.useState(false)


  const onOpenModal = () => setOpenModal(true)
  const onCloseModal = () => setOpenModal(false)
  return (
    <div>
      <Title>Selects</Title>

      <SelectWrapper>
        <Select
          label={'Disabled Simple Select'}
          isDisabled={true}
          options={[
            { value: 'sun', label: 'Sun' },
            { value: 'moon', label: 'Moon' },
            { value: 'star', label: 'Star' },
            { value: 'planet', label: 'Planet' },
            { value: 'galaxy', label: 'Galaxy' }
          ]}
          defaultValue={{ value: 'moon', label: 'Moon' }}
        />

        <Select
          label={'Creatable Select'}
          options={[
            { value: 'sun', label: 'Sun' },
            { value: 'moon', label: 'Moon' },
            { value: 'star', label: 'Star' },
            { value: 'planet', label: 'Planet' },
            { value: 'galaxy', label: 'Galaxy' }
          ]}
          isCreatable={true}
          onCreate={onOpenModal}
        />


        <Select
          label={'Default Select ERROR'}
          type={'select'}
          error={'This field is required.'}
          options={[
            { value: 1, label: 'Apple' },
            { value: 2, label: 'Banana' },
            { value: 3, label: 'Chocolate' }
          ]}
        />
        <Select
          label={'Custom height select'}
          height={'42px'}
          options={[
            { value: 1, label: 'Jan' },
            { value: 2, label: 'Feb' },
            { value: 3, label: 'Mar' },
            { value: 4, label: 'Apr' },
            { value: 5, label: 'May' },
            { value: 6, label: 'Jun' },
            { value: 7, label: 'Jul' },
            { value: 8, label: 'Aug' },
            { value: 9, label: 'Sep' },
            { value: 10, label: 'Oct' },
            { value: 11, label: 'Nov' },
            { value: 12, label: 'Dec' }
          ]}
        />
      </SelectWrapper>

      <Modal title={'Modal'} open={openModal} onClose={onCloseModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, rerum.
      </Modal>
    </div>
  )
}

Selects.propTypes = {}

export default Selects

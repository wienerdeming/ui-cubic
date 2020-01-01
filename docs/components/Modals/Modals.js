import React from 'react'
import styled from 'styled-components'
import { Button, SecondaryButton } from 'Button'
import Modal from 'Modal'
import Select from 'Select'
import UserIcon from '../../icons/User'

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`

const ActionButtons = styled('div')`
  text-align: right;
  margin-top: 40px;
  & button {
    margin-left: 15px;
    width: 180px;
  }
`

const StyledModalTitle = styled('div')`
  align-items: center;
  display: flex;
  & > svg {
    color: ${props => props.theme.cube.colorRed};
    font-size: 22px;
    margin-right: 8px;
  }
`

const Modals = props => {
  const [openFirstModal, setFirstOpenModal] = React.useState(false)
  const [openSecondModal, setSecondOpenModal] = React.useState(false)
  const [openCustomModal, setOpenCustomModal] = React.useState(false)

  const onCloseModal = () => {
    setFirstOpenModal(false)
    setSecondOpenModal(false)
    setOpenCustomModal(false)
  }

  const modalTitle = (
    <StyledModalTitle>
      <UserIcon />
      Ошибка планирования
    </StyledModalTitle>
  )

  return (
    <div>
      <StyledButton
        fullWidth={true}
        onClick={() => setFirstOpenModal(true)}>
        Open First Modal
      </StyledButton>
      <StyledButton
        fullWidth={true}
        onClick={() => setSecondOpenModal(true)}>
        Open Second Modal
      </StyledButton>
      <StyledButton
        fullWidth={true}
        onClick={() => setOpenCustomModal(true)}>
        Open Custom Modal
      </StyledButton>
      <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br />
      <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br />
      <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br />

      <Modal
        open={openFirstModal}
        title={'Modal title'}
        onClose={onCloseModal}
        fullWidth={true}>
        <div>First modal Content (Full width)</div>
        <br /><br /><br />
        <Select
          label={'Select'}
          options={[
            { value: '1', label: 'One' },
            { value: '2', label: 'Two' },
            { value: '3', label: 'Three' },
          ]}
        />
      </Modal>

      <Modal
        open={openSecondModal}
        title={'Modal title'}
        onClose={onCloseModal}
        maskClosable={false}
        fadeDuration={450}>
        <div>Second modal Content</div>
        <ActionButtons>
          <SecondaryButton>Cancel</SecondaryButton>
          <Button>Save</Button>
        </ActionButtons>
      </Modal>

      <Modal
        open={openCustomModal}
        title={modalTitle}
        onClose={onCloseModal}
        showCloseIcon={false}
        maskClosable={false}
        width={'720px'}>
        <ActionButtons>
          <SecondaryButton style={{ width: '280px' }} onClick={onCloseModal}>
            Понятно
          </SecondaryButton>
        </ActionButtons>
      </Modal>
    </div>
  )
}

Modals.propTypes = {}

export default Modals

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Button, SecondaryButton, Select, Modal} from '../dist/index.es'
import UserIcon from "./User";


const Wrapper = styled.div`
  padding: 30px 20px;
  > button {
  margin-right: 20px;
  margin-bottom: 10px;
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
const ActionButtons = styled('div')`
  text-align: right;
  margin-top: 40px;
  & button {
    margin-left: 15px;
    width: 180px;
  }
`


storiesOf('Modals', module)
  .add('default', () => {

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
        User does not exist
      </StyledModalTitle>
    )

    return (
      <Wrapper>
        <Button
          fullWidth={true}
          onClick={() => setFirstOpenModal(true)}>
          Open First Modal
        </Button>
        <Button
          fullWidth={true}
          onClick={() => setSecondOpenModal(true)}>
          Open Second Modal
        </Button>
        <Button
          fullWidth={true}
          onClick={() => setOpenCustomModal(true)}>
          Open Custom Modal
        </Button>
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

            <SecondaryButton style={{ width: '280px' }} onClick={onCloseModal}>
              Close
            </SecondaryButton>
        </Modal>

      </Wrapper>
    )
  })


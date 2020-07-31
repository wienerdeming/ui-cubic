import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Dropdown,
  Table,
  TableBody,
  TableCol,
  TableHeader,
  TableRow,
  Box,
  DropdownItem,
  Modal
} from '../src'

const Wrapper = styled.div`
  padding: 30px 20px;
`

const data = [
  { name: '1', id: 1 },
  { name: '2', id: 2 },
  { name: '3', id: 3 },
  { name: '4', id: 4 },
  { name: '5', id: 5 },
  { name: '6', id: 6 },
  { name: '7', id: 7 },
  { name: '8', id: 8 },
  { name: '9', id: 9 }
]


storiesOf('Table', module)
  .add('default', () => {

    const [openModal, setOpenModal] = React.useState(false)

    return (
      <Wrapper>
        <Box padding="20px">
          <Table
            gutter={30}
            selection={true}
            list={data.map(datum => datum.id)}>
            <TableHeader>
              <TableRow>
                <TableCol span={10} sortKey={'name'}>Name</TableCol>
                <TableCol span={4} sortKey={'username'}>Username</TableCol>
                <TableCol span={4}>Status</TableCol>
                <TableCol span={4}>Updated on</TableCol>
                <TableCol span={2} />
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(item => {
                return (
                  <TableRow
                    key={item.id}
                    selectId={item.id}
                    align={'center'}
                  >
                    <TableCol span={10}>Johnson John</TableCol>
                    <TableCol span={4}>ivan2871</TableCol>
                    <TableCol span={4}>Active</TableCol>
                    <TableCol span={4}>16 june 2019</TableCol>
                    <TableCol span={2}>
                      <Dropdown
                        mode={'horizontal'}
                        backgroundColor={'#f1f3f5'}
                        dotColor={'#435260'}>
                        <DropdownItem>
                          Delete
                        </DropdownItem>
                        <DropdownItem>
                          Update
                        </DropdownItem>
                      </Dropdown>
                    </TableCol>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
        <Modal
          title={'Modal'}
          open={openModal}
          onClose={() => setOpenModal(false)}>
          Modal
        </Modal>
      </Wrapper>
    )
  })


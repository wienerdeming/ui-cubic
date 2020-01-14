import React from 'react'
import User from '../../icons/User'
import Edit from '../../icons/Edit'
import Box from '../../../src/Box'
import Modal from '../../../src/Modal'
import { Dropdown, MenuListItem } from '../../../src/Dropdown'
import { Table, TableBody, TableHeader, TableRow, TableCol } from '../../../src/Table'
import { Title, Description } from '../Utils'

const data = [
  { name: '1', id: 1 },
  { name: '2', id: 2 },
  { name: '3', id: 3 },
  { name: '4', id: 4 },
  { name: '5', id: 5 },
  { name: '6', id: 6 },
  { name: '7', id: 7 },
  { name: '8', id: 8 },
  { name: '9', id: 9 },
  { name: '10', id: 10 },
  { name: '11', id: 11 },
  { name: '12', id: 12 },
  { name: '13', id: 13 },
]

export default ({ ...props }) => {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <div>
      <Title>Grid System</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, natus!
      </Description>
      <Box>
        <Table
          gutter={30}
          selection={true}
          list={data.map(datum => datum.id)}>
          <TableHeader>
            <TableRow>
              <TableCol span={10} sortKey={'name'}>ФИО</TableCol>
              <TableCol span={4} sortKey={'username'}>Логин</TableCol>
              <TableCol span={4}>Статус</TableCol>
              <TableCol span={4}>Обновлено</TableCol>
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
                  <TableCol span={10}>Иванов Иван Иванович</TableCol>
                  <TableCol span={4}>ivan2871</TableCol>
                  <TableCol span={4}>Активный</TableCol>
                  <TableCol span={4}>16 июн 2019</TableCol>
                  <TableCol span={2}>
                    <Dropdown
                      mode={'horizontal'}
                      backgroundColor={'#f1f3f5'}
                      dotColor={'#435260'}>
                      <MenuListItem>
                        <User />Добавить
                      </MenuListItem>
                      <MenuListItem>
                        <Edit />Изменить
                      </MenuListItem>
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
    </div>
  )
}

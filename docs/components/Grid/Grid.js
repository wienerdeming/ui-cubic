import React from 'react'
import { Row, Col } from 'Grid'
import { Title, Description } from '../Utils'

export default props => {
  return (
    <div>
      <Title>Grid System</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, natus!</Description>
      <Row>
        <Col span={9}>1</Col>
        <Col span={3}>2</Col>
        <Col span={5}>3</Col>
        <Col span={7}>4</Col>
      </Row>
    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import toasterTypes from './toasterTypes'
import AlertCircle from './AlertCircle'
import AlertTriangle from './AlertTriangle'
import Check from './Check'

const getIconBackground = props => {
  switch (props.type) {
    case toasterTypes.SUCCESS: return props.theme.cube.primaryColor
    case toasterTypes.WARNING: return props.theme.cube.colorYellow
    case toasterTypes.ERROR: return props.theme.cube.colorRed
    default: return 'none'
  }
}

const IconContainer = styled('div')`
  align-items: center;
  background-color: ${props => props.theme.cube.primaryColor};
  display: flex;
  justify-content: center;
  min-width: 52px;
  width: 52px;
`

const Toast = styled('div')`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  display: flex;
  min-height: 76px;
  padding: 0;
  overflow: hidden;
  width: 310px;
  & ${IconContainer} {
    background-color: ${props => getIconBackground(props)};
  }
`

const Icon = styled('div')`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 26px;
  width: 26px;
  & > svg {
    color: #fff;
    font-size: 22px;
    display: block;
  }
`

const Content = styled('div')`
  flex-grow: 1;
  padding: 16px 20px;
`

const Title = styled('div')`
  color: ${props => props.theme.cube.textColor};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`

const Message = styled('div')`
  color: ${props => props.theme.cube.lightGreyColor};
  font-size: 13px;
  font-weight: normal;
  line-height: 16px;
`

const toasterContent = {
  [toasterTypes.SUCCESS]: {
    icon: <Check />,
    title: 'Успешно',
    message: 'Успешно выполнено'
  },
  [toasterTypes.ERROR]: {
    icon: <AlertCircle />,
    title: 'Ошибка',
    message: 'Попробуйте еще раз'
  },
  [toasterTypes.WARNING]: {
    icon: <AlertTriangle />,
    title: 'Внимание',
    message: 'Внимание внимание'
  }
}

const Toaster = props => {
  const { type, title, message } = props
  return (
    <Toast type={type} data-cy="toaster">
      <IconContainer>
        <Icon>{toasterContent[type].icon}</Icon>
      </IconContainer>
      <Content>
        <Title>{title || toasterContent[type].title}</Title>
        <Message>{message || toasterContent[type].message}</Message>
      </Content>
    </Toast>
  )
}

Toaster.propTypes = {
  type: PropTypes.oneOf([
    toasterTypes.SUCCESS,
    toasterTypes.ERROR,
    toasterTypes.WARNING
  ]),
  title: PropTypes.string,
  message: PropTypes.string
}

Toaster.defaultProps = {
  type: toasterTypes.SUCCESS
}

export default Toaster

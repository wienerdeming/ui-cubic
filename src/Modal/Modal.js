import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Portal from '../Portal'
import AnimationWrapper from '../AnimationWrapper'
import CloseIcon from './CloseIcon'

const StyledModal = styled('div')`
  color: ${props => props.theme.cube.palette?.text?.main};
  margin: 50px;
`

const ModalMask = styled('div')`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  pointer-events: auto;
  z-index: 10;
`

const ModalRoot = styled('div')`
  position: relative;
  z-index: ${props => props.zIndex};
  & ${StyledModal} {
    opacity: ${props => props.fadeType === 'in' ? '1' : '0'};
    transform: ${props => props.fadeType === 'in' ? 'scale(1)' : 'scale(0.2)'};
    transition:
      transform ${props => `${props.fadeDuration}ms`} cubic-bezier(0.03, 0.93, 0.44, 0.95),
      opacity ${props => `${props.fadeDuration}ms`};
    transform-origin: center 100px;
    max-width: ${({ maxWidth }) => maxWidth};
    width ${props => props.fullWidth ? '100%' : props.width};
    z-index: 20;
  }
  & ${ModalMask} {
    opacity: ${props => props.fadeType === 'in' ? '1' : '0'};
    transition: all ${props => `${props.fadeDuration}ms`};
  }
`

const ModalWrapper = styled('div')`
  align-items: baseline;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`

const ModalContent = styled('div')`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(35, 38, 41, 0.5);
  position: relative;
  pointer-events: auto;
`

const ModalHeader = styled('div')`
  padding: 40px 25px 0;
  position: relative;
`

const ModalTitle = styled('div')`
  font-size: 20px;
  font-weight: 500;
  width: calc(100% - 40px);
`

const Close = styled('div')`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 36px;
  position: absolute;
  pointer-events: all;
  right: 25px;
  top: 20px;
  transition: ${props => props.theme.cube.transition};
  width: 36px;
  &:hover {
    background-color: #f2f3f4;
  }
  & svg {
    color: #2c3a50;
    font-size: 18px;
    display: block;
  }
`

const ModalBody = styled('div')`
  padding: 30px 25px 40px;
`

const Modal = props => {
  const {
    open,
    isRendered,
    onClose,
    title,
    children,
    width,
    maxWidth,
    fullWidth,
    maskClosable,
    fadeType,
    fadeDuration,
    showCloseIcon,
    showHeader,
    zIndex
  } = props

  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style = null

    return () => {
      document.body.style = null
    }
  }, [open])

  if (!isRendered) return null

  return (
    <Portal>
      <ModalRoot
        open={open}
        fadeType={fadeType}
        fadeDuration={fadeDuration}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        width={width}
        zIndex={zIndex}
      >
        <ModalWrapper>
          <StyledModal>
            <ModalContent>
              {showHeader && (
                <ModalHeader>
                  <ModalTitle>{title}</ModalTitle>
                  {showCloseIcon && (
                    <Close onClick={onClose}>
                      <CloseIcon />
                    </Close>
                  )}
                </ModalHeader>
              )}
              <ModalBody>{children}</ModalBody>
            </ModalContent>
          </StyledModal>
          <ModalMask onClick={maskClosable ? onClose : null} />
        </ModalWrapper>
      </ModalRoot>
    </Portal>
  )
}

Modal.propTypes = {
  fadeType: PropTypes.oneOf([null, 'in', 'out']),
  fadeDuration: PropTypes.number,
  maskClosable: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  isRendered: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.node,
  showCloseIcon: PropTypes.bool,
  showHeader: PropTypes.bool,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  zIndex: PropTypes.number
}

Modal.defaultProps = {
  maskClosable: true,
  showCloseIcon: true,
  showHeader: true,
  width: '600px',
  zIndex: 1000
}

export default AnimationWrapper(Modal)

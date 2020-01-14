import React from 'react'
import FadeButton from './FadeButton'
import SecondaryButton from 'Button/SecondaryButton'

const Animation = props => {
  const [show, setShow] = React.useState(false)
  return (
    <div>
      <SecondaryButton onClick={() => setShow(!show)}>Toggle</SecondaryButton>
      <br />
      <br/>
      <FadeButton open={show} />
    </div>
  )
}

Animation.propTypes = {}

export default Animation

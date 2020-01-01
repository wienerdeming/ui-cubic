import React from 'react'
import FadeButton from './FadeButton'

const Animation = props => {
  const [show, setShow] = React.useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <br />
      <FadeButton open={show} />
    </div>
  )
}

Animation.propTypes = {}

export default Animation

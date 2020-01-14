import React from 'react'
import Toaster from 'Toaster'
import TYPES from 'Toaster/toasterTypes'

const Toasters = props => {
  return (
    <div>
      <Toaster />
      <br/>
      <Toaster type={TYPES.ERROR}/>
      <br/>
      <Toaster type={TYPES.WARNING}/>
    </div>
  )
}

Toasters.propTypes = {}

export default Toasters
